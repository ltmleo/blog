import {useLocation} from '@docusaurus/router';
import {
  filterDocCardListItems,
  findFirstSidebarItemLink,
  useDocById,
  useDocsSidebar,
} from '@docusaurus/plugin-content-docs/client';
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';
import LinkCard from '@site/src/components/LinkCard';
import styles from './styles.module.css';

/**
 * Card grid of the current page's children, derived from the sidebar.
 *
 * - On a category index page (e.g. learning/livros/index.md) it lists the
 *   category's items.
 * - On a sidebar root page (e.g. learning/index.md) it lists the top-level
 *   items, excluding the page itself.
 *
 * Icons and descriptions come from `sidebar_custom_props: {icon, description}`
 * in the doc front matter (or `customProps` in `_category_.yaml`).
 */

type CustomProps = {icon?: string; description?: string} | undefined;

const normalize = (path?: string) => path?.replace(/\/$/, '');

function findCategoryByHref(
  items: PropSidebarItem[],
  href: string,
): PropSidebarItemCategory | undefined {
  for (const item of items) {
    if (item.type !== 'category') continue;
    if (normalize(item.href) === href) return item;
    const found = findCategoryByHref(item.items, href);
    if (found) return found;
  }
  return undefined;
}

function countDocs(item: PropSidebarItem): number {
  if (item.type === 'link') return 1;
  if (item.type === 'category') {
    // A category with its own index page counts that page too.
    return item.items.reduce((sum, child) => sum + countDocs(child), item.href ? 1 : 0);
  }
  return 0;
}

const plural = (n: number) => `${n} ${n === 1 ? 'nota' : 'notas'}`;

type CardProps<T> = {item: T; index: number; defaultIcon?: string};

function CategoryCard({item, index, defaultIcon = '🗂️'}: CardProps<PropSidebarItemCategory>) {
  const href = item.href ?? findFirstSidebarItemLink(item);
  if (!href) return null;
  const props = item.customProps as CustomProps;
  return (
    <LinkCard
      to={href}
      title={item.label}
      icon={props?.icon ?? defaultIcon}
      description={props?.description ?? item.description}
      meta={plural(countDocs(item))}
      revealDelayMs={Math.min(index, 5) * 70}
    />
  );
}

function DocLinkCard({item, index, defaultIcon = '📄'}: CardProps<PropSidebarItemLink>) {
  const doc = useDocById(item.docId ?? undefined);
  const props = item.customProps as CustomProps;
  return (
    <LinkCard
      to={item.href}
      title={item.label}
      icon={props?.icon ?? defaultIcon}
      description={props?.description ?? item.description ?? doc?.description}
      revealDelayMs={Math.min(index, 5) * 70}
    />
  );
}

/** `icon` sets the fallback icon for items without `customProps.icon`. */
export default function DocCards({icon}: {icon?: string}) {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  if (!sidebar) return null;

  const current = normalize(pathname)!;
  const category = findCategoryByHref(sidebar.items, current);
  const items = filterDocCardListItems(category?.items ?? sidebar.items).filter(
    (item) => !(item.type === 'link' && normalize(item.href) === current),
  );

  return (
    <div className={styles.grid}>
      {items.map((item, i) =>
        item.type === 'category' ? (
          <CategoryCard key={item.label} item={item} index={i} defaultIcon={icon} />
        ) : item.type === 'link' ? (
          <DocLinkCard key={item.href} item={item} index={i} defaultIcon={icon} />
        ) : null,
      )}
    </div>
  );
}
