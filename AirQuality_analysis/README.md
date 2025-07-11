# 🌫️ Time Series Analysis on Air Quality Data

## 🗂️ Overview

This project demonstrates **time series forecasting** on air quality data from `AirQualityUCI.xlsx`. It covers **data cleaning, exploratory data analysis (EDA), ARIMA modeling, SARIMAX and Prophet forecasting**, and exports forecasts for real-world environmental monitoring and dashboards.

---

## 🎯 Objectives

✅ Clean and preprocess raw air quality sensor data  
✅ Perform EDA to understand trends, seasonality, and outliers  
✅ Train ARIMA, SARIMAX, and Prophet models for pollutant forecasting  
✅ Export forecast results for practical analysis and reporting

---

## 🛠️ Technologies Used

- Python
- Pandas, NumPy
- Matplotlib, Seaborn
- Statsmodels, pmdarima
- Prophet
- Jupyter Notebook

---

## 🔹 Key Steps

### 1️⃣ Data Cleaning and Preprocessing

- Load `AirQualityUCI.xlsx` into a Pandas DataFrame.
- Merge `Date` and `Time` into a single datetime index.
- Replace `-200` with `NaN` and interpolate missing values.
- Prepare clean, continuous pollutant time series for modeling.

---

### 2️⃣ Exploratory Data Analysis (EDA)

- Basic statistics and descriptive summaries.
- Missing value heatmaps to detect systematic issues.
- Time series plots to visualize pollutant trends.
- Histograms and KDE plots for distribution insights.
- Correlation heatmaps to identify feature relationships.
- Boxplots for outlier detection.
- Seasonal decomposition to analyze trend and seasonality.

---

### 3️⃣ ARIMA Forecasting

- Fit ARIMA `(p=1, d=1, q=1)` on `CO(GT)` for initial forecasting.
- Evaluate residuals and visualize forecasts vs actual values.

---

### 4️⃣ Advanced Forecasting with SARIMAX and Prophet

- Fit SARIMAX models using exogenous weather features for each pollutant.
- Fit Prophet models for hourly forecasts, including external regressors.
- Compare and analyze multi-model outputs.

---

### 5️⃣ Export Forecasts

- Generate future hourly timestamps for the forecast period.
- Export SARIMAX and Prophet forecasts to Excel with structured sheets for practical analysis.

---

## 📊 Results

The project demonstrates:
- Handling of **real-world noisy sensor data**.
- Application of **multiple time series forecasting models**.
- Automation of **forecast generation and export** for air quality data analysis.

---

## 🪄 Purpose

This project builds practical skills in:
- Preparing and validating time series datasets.
- Applying classical and advanced forecasting models.
- Automating analysis pipelines for environmental data use cases.

---
