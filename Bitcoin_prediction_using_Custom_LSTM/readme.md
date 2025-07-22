# 💹 Cryptocurrency Price Prediction using LSTM (TensorFlow)

## 🗂️ Overview

This project demonstrates **predicting Bitcoin prices using an LSTM network built from scratch with TensorFlow low-level operations**. It covers **data collection, preprocessing, custom LSTM cell implementation, training, prediction, and evaluation** on BTC-USD historical data.

---

## 🎯 Objectives

✅ Build an LSTM model from scratch without high-level APIs  
✅ Predict future Bitcoin prices using historical data  
✅ Visualize and evaluate model predictions against actual prices

---

## 🛠️ Technologies Used

- Python
- TensorFlow (low-level API)
- NumPy, Pandas
- Matplotlib
- scikit-learn
- yfinance

---

## 🔹 Key Steps

### 1️⃣ Data Collection & Visualization

- Download BTC-USD price data using `yfinance`.
- Visualize BTC closing prices over time to observe volatility and trends.

---

### 2️⃣ Data Preprocessing

- Normalize prices using `MinMaxScaler` for stable training.
- Create input sequences of length 30 for supervised learning.
- Split data into training (80%) and testing (20%) sets.

---

### 3️⃣ LSTM from Scratch

- Implement a **custom LSTM cell** using TensorFlow low-level operations:
  - Forget, input, cell, and output gates.
  - Manual weight initialization and updates.
- Train over **50 epochs** using the Adam optimizer to minimize MSE loss.

---

### 4️⃣ Prediction and Evaluation

- Predict Bitcoin prices on the test set.
- Inverse transform to get actual predicted price values.
- Visualize predicted vs actual prices for comparison.
- Calculate performance metrics:
  - **RMSE: 6179.13**
  - **R² Score: 0.94**

---

## 📊 Results

The model achieved:
✅ Accurate trend capture in Bitcoin prices  
✅ Strong R² score demonstrating effective prediction capability  
✅ End-to-end LSTM learning workflow using core TensorFlow operations

---

## 🪄 Purpose

This project helps build:
- A clear understanding of **LSTM mechanics** beyond library usage.  
- Practical skills in **data preparation and sequence modeling**.  
- Insights into **predicting volatile cryptocurrency prices using ML**.
