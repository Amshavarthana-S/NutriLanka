import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GroceryListGenerator = ({ currentLanguage, mealPlan }) => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  const translations = {
    en: {
      title: "Smart Grocery List",
      subtitle: "Auto-generated from your meal plan",
      categories: {
        all: 'All Items',
        vegetables: 'Vegetables',
        proteins: 'Proteins',
        grains: 'Grains & Rice',
        spices: 'Spices & Herbs',
        dairy: 'Dairy & Coconut',
        others: 'Others'
      },
      actions: {
        generateList: 'Generate List',
        shareList: 'Share List',
        printList: 'Print List',
        clearChecked: 'Clear Checked'
      },
      stats: {
        totalItems: 'Total Items',
        estimatedCost: 'Estimated Cost',
        checkedItems: 'Checked Items'
      },
      currency: 'LKR',
      marketInfo: 'Local Market Prices',
      availability: 'Seasonal Availability'
    },
    si: {
      title: "බුද්ධිමත් සාප්පු ලැයිස්තුව",
      subtitle: "ඔබේ ආහාර සැලසුමෙන් ස්වයංක්‍රීයව ජනනය කරන ලදී",
      categories: {
        all: 'සියලුම අයිතම',
        vegetables: 'එළවළු',
        proteins: 'ප්‍රෝටීන්',
        grains: 'ධාන්‍ය සහ සහල්',
        spices: 'කුළුබඩු සහ ඖෂධ පැළෑටි',
        dairy: 'කිරි නිෂ්පාදන සහ පොල්',
        others: 'අනෙකුත්'
      },
      actions: {
        generateList: 'ලැයිස්තුව ජනනය කරන්න',
        shareList: 'ලැයිස්තුව බෙදාගන්න',
        printList: 'ලැයිස්තුව මුද්‍රණය කරන්න',
        clearChecked: 'පරීක්ෂා කළ ඒවා ඉවත් කරන්න'
      },
      stats: {
        totalItems: 'මුළු අයිතම',
        estimatedCost: 'ඇස්තමේන්තු වියදම',
        checkedItems: 'පරීක්ෂා කළ අයිතම'
      },
      currency: 'රුපියල්',
      marketInfo: 'ප්‍රාදේශීය වෙළඳපොළ මිල',
      availability: 'කාලීන ලබා ගත හැකි බව'
    },
    ta: {
      title: "புத்திசாலி மளிகை பட்டியல்",
      subtitle: "உங்கள் உணவு திட்டத்திலிருந்து தானாக உருவாக்கப்பட்டது",
      categories: {
        all: 'அனைத்து பொருட்கள்',
        vegetables: 'காய்கறிகள்',
        proteins: 'புரதங்கள்',
        grains: 'தானியங்கள் & அரிசி',
        spices: 'மசாலா & மூலிகைகள்',
        dairy: 'பால் & தேங்காய்',
        others: 'மற்றவை'
      },
      actions: {
        generateList: 'பட்டியல் உருவாக்க',
        shareList: 'பட்டியல் பகிர்க',
        printList: 'பட்டியல் அச்சிட',
        clearChecked: 'சரிபார்த்தவை அழிக்க'
      },
      stats: {
        totalItems: 'மொத்த பொருட்கள்',
        estimatedCost: 'மதிப்பிடப்பட்ட செலவு',
        checkedItems: 'சரிபார்க்கப்பட்ட பொருட்கள்'
      },
      currency: 'ரூபாய்',
      marketInfo: 'உள்ளூர் சந்தை விலைகள்',
      availability: 'பருவகால கிடைக்கும் தன்மை'
    }
  };

  const mockGroceryItems = {
    vegetables: [
      { id: 1, name: 'Onions', nameLocal: { si: 'ලූණු', ta: 'வெங்காயம்' }, quantity: '1 kg', price: 450, category: 'vegetables', seasonal: true },
      { id: 2, name: 'Tomatoes', nameLocal: { si: 'තක්කාලි', ta: 'தக்காளி' }, quantity: '500g', price: 320, category: 'vegetables', seasonal: true },
      { id: 3, name: 'Green Chilies', nameLocal: { si: 'අබ මිරිස්', ta: 'பச்சை மிளகாய்' }, quantity: '250g', price: 180, category: 'vegetables', seasonal: false },
      { id: 4, name: 'Curry Leaves', nameLocal: { si: 'කරපිංචා', ta: 'கறிவேப்பிலை' }, quantity: '1 bunch', price: 50, category: 'vegetables', seasonal: false }
    ],
    proteins: [
      { id: 5, name: 'Red Lentils', nameLocal: { si: 'රතු පරිප්පු', ta: 'சிவப்பு பருப்பு' }, quantity: '500g', price: 380, category: 'proteins', seasonal: false },
      { id: 6, name: 'Fish (Tuna)', nameLocal: { si: 'මාළු (කෙලවල්ලා)', ta: 'மீன் (டுனா)' }, quantity: '1 kg', price: 1200, category: 'proteins', seasonal: true },
      { id: 7, name: 'Eggs', nameLocal: { si: 'බිත්තර', ta: 'முட்டை' }, quantity: '12 pieces', price: 420, category: 'proteins', seasonal: false }
    ],
    grains: [
      { id: 8, name: 'Basmati Rice', nameLocal: { si: 'බාස්මති සහල්', ta: 'பாஸ்மதி அரிசி' }, quantity: '2 kg', price: 980, category: 'grains', seasonal: false },
      { id: 9, name: 'Rice Flour', nameLocal: { si: 'ඉඳිආප්ප පිටි', ta: 'அரிசி மாவு' }, quantity: '1 kg', price: 220, category: 'grains', seasonal: false }
    ],
    spices: [
      { id: 10, name: 'Turmeric Powder', nameLocal: { si: 'කහ කුඩු', ta: 'மஞ்சள் தூள்' }, quantity: '100g', price: 150, category: 'spices', seasonal: false },
      { id: 11, name: 'Coriander Seeds', nameLocal: { si: 'කොත්තමල්ලි', ta: 'கொத்தமல்லி' }, quantity: '250g', price: 280, category: 'spices', seasonal: false },
      { id: 12, name: 'Cinnamon Sticks', nameLocal: { si: 'කුරුඳු', ta: 'பட்டை' }, quantity: '50g', price: 320, category: 'spices', seasonal: false }
    ],
    dairy: [
      { id: 13, name: 'Coconut Milk', nameLocal: { si: 'කිරි පොල්', ta: 'தேங்காய் பால்' }, quantity: '400ml tin', price: 180, category: 'dairy', seasonal: false },
      { id: 14, name: 'Fresh Coconut', nameLocal: { si: 'තැවිරි පොල්', ta: 'புதிய தேங்காய்' }, quantity: '2 pieces', price: 200, category: 'dairy', seasonal: false }
    ],
    others: [
      { id: 15, name: 'Tamarind', nameLocal: { si: 'සියඹලා', ta: 'புளி' }, quantity: '200g', price: 120, category: 'others', seasonal: false },
      { id: 16, name: 'Jaggery', nameLocal: { si: 'හකුරු', ta: 'வெல்லம்' }, quantity: '500g', price: 250, category: 'others', seasonal: false }
    ]
  };

  const t = translations?.[currentLanguage];
  
  const allItems = Object.values(mockGroceryItems)?.flat();
  const filteredItems = activeCategory === 'all' ? allItems : mockGroceryItems?.[activeCategory] || [];
  
  const totalItems = allItems?.length;
  const checkedCount = checkedItems?.size;
  const totalCost = allItems?.reduce((sum, item) => sum + item?.price, 0);

  const handleItemCheck = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems?.has(itemId)) {
      newCheckedItems?.delete(itemId);
    } else {
      newCheckedItems?.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const clearCheckedItems = () => {
    setCheckedItems(new Set());
  };

  return (
    <div className="bg-card rounded-lg border border-border heritage-shadow p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl font-poppins font-semibold text-foreground mb-2">
            {t?.title}
          </h2>
          <p className="text-sm text-muted-foreground font-inter">
            {t?.subtitle}
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            <Icon name="Share2" size={16} className="mr-2" />
            {t?.actions?.shareList}
          </Button>
          <Button variant="default" size="sm">
            <Icon name="Download" size={16} className="mr-2" />
            {t?.actions?.printList}
          </Button>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-poppins font-bold text-foreground mb-1">
            {totalItems}
          </div>
          <div className="text-sm text-muted-foreground font-inter">
            {t?.stats?.totalItems}
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-poppins font-bold text-primary mb-1">
            {totalCost?.toLocaleString()} {t?.currency}
          </div>
          <div className="text-sm text-muted-foreground font-inter">
            {t?.stats?.estimatedCost}
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-poppins font-bold text-success mb-1">
            {checkedCount}/{totalItems}
          </div>
          <div className="text-sm text-muted-foreground font-inter">
            {t?.stats?.checkedItems}
          </div>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(t?.categories)?.map(([key, label]) => (
          <Button
            key={key}
            variant={activeCategory === key ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(key)}
            className="font-inter"
          >
            {label}
          </Button>
        ))}
      </div>
      {/* Grocery List */}
      <div className="space-y-3 mb-6">
        {filteredItems?.map((item) => (
          <div
            key={item?.id}
            className={`flex items-center space-x-4 p-3 rounded-lg border organic-transition ${
              checkedItems?.has(item?.id)
                ? 'bg-success/5 border-success/20' :'bg-muted/20 border-border hover:border-primary/50'
            }`}
          >
            {/* Checkbox */}
            <button
              onClick={() => handleItemCheck(item?.id)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center organic-transition ${
                checkedItems?.has(item?.id)
                  ? 'bg-success border-success text-white' :'border-border hover:border-primary'
              }`}
            >
              {checkedItems?.has(item?.id) && (
                <Icon name="Check" size={12} />
              )}
            </button>

            {/* Item Details */}
            <div className="flex-1 min-w-0">
              <div className={`font-poppins font-medium ${
                checkedItems?.has(item?.id) ? 'line-through text-muted-foreground' : 'text-foreground'
              }`}>
                {currentLanguage !== 'en' && item?.nameLocal?.[currentLanguage] 
                  ? item?.nameLocal?.[currentLanguage] 
                  : item?.name}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {item?.quantity}
                {item?.seasonal && (
                  <span className="ml-2 px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                    {currentLanguage === 'en' ? 'Seasonal' : 
                     currentLanguage === 'si' ? 'කාලීන' : 'பருவகால'}
                  </span>
                )}
              </div>
            </div>

            {/* Price */}
            <div className={`text-right ${
              checkedItems?.has(item?.id) ? 'text-muted-foreground' : 'text-foreground'
            }`}>
              <div className="font-poppins font-semibold">
                {item?.price} {t?.currency}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={clearCheckedItems}
          disabled={checkedItems?.size === 0}
          className="flex-1"
        >
          <Icon name="RotateCcw" size={16} className="mr-2" />
          {t?.actions?.clearChecked}
        </Button>
        
        <Button variant="default" className="flex-1">
          <Icon name="MapPin" size={16} className="mr-2" />
          {currentLanguage === 'en' ? 'Find Local Markets' : 
           currentLanguage === 'si'? 'ප්‍රාදේශීය වෙළඳපොළ සොයන්න' : 'உள்ளூர் சந்தைகளைக் கண்டறியுங்கள்'}
        </Button>
      </div>
      {/* Market Info */}
      <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-accent" />
          <span className="font-poppins font-medium text-foreground text-sm">
            {t?.marketInfo}
          </span>
        </div>
        <p className="text-sm text-muted-foreground font-inter">
          {currentLanguage === 'en' ?'Prices may vary by location and season. Visit local markets for the freshest ingredients and best deals.'
            : currentLanguage === 'si' ?'ස්ථානය සහ කාලගුණය අනුව මිල වෙනස් විය හැක. නැවුම් අමුද්‍රව්‍ය සහ හොඳම ගනුදෙනු සඳහා ප්‍රාදේශීය වෙළඳපොළවලට යන්න.' :'இடம் மற்றும் பருவத்தைப் பொறுத்து விலைகள் மாறுபடலாம். புதிய பொருட்கள் மற்றும் சிறந்த ஒப்பந்தங்களுக்கு உள்ளூர் சந்தைகளைப் பார்வையிடுங்கள்.'}
        </p>
      </div>
    </div>
  );
};

export default GroceryListGenerator;