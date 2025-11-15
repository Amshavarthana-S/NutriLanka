import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CategoryGrid = ({ onCategorySelect }) => {
  const categories = [
  {
    id: 'rice-dishes',
    name: 'Rice Dishes',
    sinhalaName: 'බත් වර්ග',
    icon: 'Wheat',
    image: "https://images.unsplash.com/photo-1704728233642-7a03de4e1e19",
    imageAlt: 'Traditional Sri Lankan rice and curry served on banana leaf with various colorful curries',
    count: 45,
    color: 'bg-primary',
    description: 'Traditional rice preparations'
  },
  {
    id: 'curries',
    name: 'Curries',
    sinhalaName: 'කරි වර්ග',
    icon: 'Soup',
    image: "https://images.unsplash.com/photo-1575919159574-e49dc9e1228f",
    imageAlt: 'Assorted Sri Lankan curry dishes in clay pots with rich spices and coconut milk',
    count: 78,
    color: 'bg-accent',
    description: 'Spiced vegetable & meat curries'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    sinhalaName: 'එළවළු',
    icon: 'Leaf',
    image: "https://images.unsplash.com/photo-1717240740648-ca7a380b3eb7",
    imageAlt: 'Fresh tropical vegetables including okra, eggplant, and green beans arranged colorfully',
    count: 62,
    color: 'bg-secondary',
    description: 'Fresh local vegetables'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    sinhalaName: 'මුහුදු ආහාර',
    icon: 'Fish',
    image: "https://images.unsplash.com/photo-1687600938883-af17171fec25",
    imageAlt: 'Grilled fish with Sri Lankan spices and coconut curry sauce on traditional plate',
    count: 34,
    color: 'bg-blue-500',
    description: 'Ocean fresh preparations'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    sinhalaName: 'කෑම වර්ග',
    icon: 'Cookie',
    image: "https://images.unsplash.com/photo-1680359870490-d49895a285dd",
    imageAlt: 'Traditional Sri Lankan short eats including rolls, cutlets, and wade arranged on banana leaf',
    count: 56,
    color: 'bg-orange-500',
    description: 'Traditional short eats'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    sinhalaName: 'පානීය',
    icon: 'Coffee',
    image: "https://images.unsplash.com/photo-1659608669988-7b157f20792f",
    imageAlt: 'Traditional Sri Lankan tea ceremony with Ceylon tea in glass cups and traditional sweets',
    count: 23,
    color: 'bg-amber-600',
    description: 'Traditional drinks & teas'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    sinhalaName: 'අතුරුපස',
    icon: 'Cake',
    image: "https://images.unsplash.com/photo-1604401786019-299fc8eaab15",
    imageAlt: 'Traditional Sri Lankan sweets including kokis, aluwa, and milk toffee on decorative plate',
    count: 29,
    color: 'bg-pink-500',
    description: 'Sweet traditional treats'
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    sinhalaName: 'උදේ ආහාර',
    icon: 'Sunrise',
    image: "https://images.unsplash.com/photo-1722084017352-ba2dd0726b48",
    imageAlt: 'Traditional Sri Lankan breakfast with hoppers, string hoppers, and coconut sambol',
    count: 31,
    color: 'bg-yellow-500',
    description: 'Morning meal traditions'
  }];


  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="font-poppins font-bold text-2xl text-foreground mb-2">
          Explore Food Categories
        </h2>
        <p className="text-muted-foreground">
          Discover the rich diversity of Sri Lankan cuisine through traditional food categories
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories?.map((category) =>
        <button
          key={category?.id}
          onClick={() => onCategorySelect(category?.id)}
          className="group relative overflow-hidden rounded-lg heritage-shadow organic-transition hover:shadow-lg">

            {/* Background Image */}
            <div className="relative h-32">
              <Image
              src={category?.image}
              alt={category?.imageAlt}
              className="w-full h-full object-cover group-hover:scale-110 organic-transition" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              {/* Icon & Count */}
              <div className="flex items-center justify-between">
                <div className={`p-2 ${category?.color} text-white rounded-lg`}>
                  <Icon name={category?.icon} size={20} />
                </div>
                <span className="px-2 py-1 bg-card/90 text-foreground text-xs rounded-full font-medium">
                  {category?.count}
                </span>
              </div>

              {/* Title & Description */}
              <div className="text-left">
                <h3 className="font-poppins font-semibold text-foreground mb-1 group-hover:text-primary organic-transition">
                  {category?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{category?.sinhalaName}</p>
                <p className="text-xs text-muted-foreground">{category?.description}</p>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 organic-transition" />
          </button>
        )}
      </div>
    </div>);

};

export default CategoryGrid;