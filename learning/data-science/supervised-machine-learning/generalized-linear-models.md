---
sidebar_position: 1
tags: ['ml', 'dsa', 'python', 'learning', classnotes]
---
# GLM - Generalized Linear Models

## OLS - Ordinary Least Squares

### Python code
```python
import statsmodels.api as sm
sm.OLS.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```

## LOGIT - Logistic Regression
### Python code
```python
import statsmodels.api as sm
sm.Logit.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```

## MLogit - Multinomial Logistic Regression

### Python code
```python
import statsmodels.api as sm
sm.MNLogit.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```

## Poisson Regression

### Python code
```python
import statsmodels.api as sm
sm.Poisson.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```

## Bneg - Negative Binomial Regression
### Python code
```python
import statsmodels.api as sm
sm.NegativeBinomial.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```

## ZIP - Zero Inflated Poisson
### Python code
```python
import statsmodels.api as sm
sm.ZeroInflatedPoisson.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```

## ZINB - Zero Inflated Negative Binomial
### Python code
```python
import statsmodels.api as sm
sm.ZeroInflatedNegativeBinomial.from_formula('y ~ x1 + x2 + x3', data=df).fit().summary()
```