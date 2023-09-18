import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
      const example = [
            {
                  "id": 1,
                  "name": "Basic Membership",
                  "features": [
                        "Access to gym equipment",
                        "Locker room access",
                        "Limited group fitness classes",
                        "No personal trainer sessions",
                        "24/7 gym access",
                        "Discounts at the gym shop"
                  ],
                  "price": "$29.99"
            },
            {
                  "id": 2,
                  "name": "Standard Membership",
                  "features": [
                        "Access to gym equipment",
                        "Locker room access",
                        "Unlimited group fitness classes",
                        "No personal trainer sessions",
                        "24/7 gym access",
                        "Sauna and steam room access",
                        "Discounts at the gym shop"
                  ],
                  "price": "$49.99"
            },
            {
                  "id": 3,
                  "name": "Premium Membership",
                  "features": [
                        "Access to gym equipment",
                        "Locker room access",
                        "Unlimited group fitness classes",
                        "5 personal trainer sessions per month",
                        "24/7 gym access",
                        "Sauna and steam room access",
                        "Discounts at the gym shop",
                        "Free fitness assessment"
                  ],
                  "price": "$79.99"
            },
            {
                  "id": 4,
                  "name": "Corporate Membership",
                  "features": [
                        "Access to gym equipment",
                        "Locker room access",
                        "Unlimited group fitness classes",
                        "10 personal trainer sessions per month",
                        "24/7 gym access",
                        "Sauna and steam room access",
                        "Discounts at the gym shop",
                        "Free fitness assessment",
                        "Group event booking"
                  ],
                  "price": "$69.99"
            }
      ];

      return (
            <div>
                  <h2 className="text-5xl">Best prices in the town </h2>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 m-10 gap-4">
                        {
                              example.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                        }
                  </div>
            </div>
      );
};

export default PriceOptions;