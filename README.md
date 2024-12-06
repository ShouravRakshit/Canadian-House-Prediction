# **Canadian House Price Predictor**

**Canadian House Price Predictor** project is a web application that predicts real estate prices for Canadian homes based on user inputs such as  location, number of bedrooms, and bathrooms. The app integrates machine learning models with an intuitive user interface.

## **Setup**

Follow these steps to set up the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/ShouravRakshit/Canadian-House-Prediction.git
```
### **2. Install dependencies:**

```bash
pip install -r requirements.txt
```


### **3. Run the Flask server:**
```bash
python app.py  
```

## **Features**
- Predict real estate prices for homes in Canada's top 45 cities using machine learning models (Linear Regression, Random Forest).
- User-friendly front-end built with HTML/CSS/JavaScript for entering home features and receiving predictions instantly.
- Backend API created with Python Flask, serving real-time predictions from a trained machine learning model.
- Data preprocessing, feature engineering, and hyperparameter tuning implemented to ensure high model accuracy (80%).

# **Dataset**
The dataset was sourced from Kaggle and contains real estate information for Canada's top 45 cities. Key features of the dataset include:

- Price: Listed price of the property (in Canadian dollars).
- City and Province: Geographical details of the property.
- Number of Bedrooms and Bathrooms: Features of the property.
- Population and Median Family Income: City-level demographic and economic information.
- The data was cleaned and preprocessed to remove outliers, handle missing values, and create meaningful features.

# **Technologies Used**
- Python: Backend logic and data processing.
- Numpy, Pandas: Data cleaning and preprocessing.
- Scikit-learn: Machine learning model training (Linear Regression, Random Forest).
- Matplotlib: Data visualization and analysis.
- Flask: Backend server for handling API requests.
- HTML/CSS/JavaScript: Front-end design and interactivity.

