import os

categories = {
    "Technology": [
        "Mobiles",
        "Tablets",
        "Laptops",
        "Wearables",
        "Apps",
        "Cryptocurrency",
        "Audio",
        "Cameras"
    ],
    "Hubs": [
        "Microsoft-Hub",
        "Nokia-Hub",
        "Samsung-Hub",
        "Google-Hub",
        "Sony-Hub",
        "Android-Hub",
        "Apple-Hub"
    ],
    "News": [
        "Breaking News",
        "360 Daily"
    ],
    "Smart Home & Appliances": [
        "Home Entertainment",
        "Home Appliances",
        "Smart Home"
    ],
    "Lifestyle & Leisure": [
        "Opinion",
        "Photos",
        "Videos",
        "Entertainment",
        "Internet",
        "Gaming",
        "Science",
        "How to"
    ],
    "Others": [
        "Podcasts",
        "Contests",
        "Culture"
    ]
}

for category, subcategories in categories.items():
    os.makedirs(category, exist_ok=True)
    for subcategory in subcategories:
        subcategory_path = os.path.join(category, subcategory)
        os.makedirs(subcategory_path, exist_ok=True)
        subcategory_file = os.path.join(subcategory_path, "index.html")
        open(subcategory_file, 'w').close()
