import json
import pickle
import numpy as np

__locations = None
__data_columns = None
__model = None

def get_estimated_price(location, bedroom, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = bedroom
    x[1] = bath
    if loc_index >= 0:
        x[loc_index] = 1

    # The value model is going predict is going to be log(price) so we need to take the exponential of the value to get the actual price.
    return f"{round(np.exp(__model.predict([x])[0]), 0):.2f} CAD"

def get_location_names():
    return __locations

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __locations
    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)["data_columns"]
        __locations = __data_columns[2:]

    global __model
    with open("./artifacts/house_price_prediction_model.pkl", "rb") as f:
        __model = pickle.load(f)
    print("loading saved artifacts...done")


if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price("city_calgary", 2, 1))
    print(get_estimated_price("city_calgary", 4, 3))
    print(get_estimated_price("city_edmonton", 6, 5))
    print(get_estimated_price("city_regina", 3, 4))
    print(get_estimated_price("city_saskatoon", 2, 3))