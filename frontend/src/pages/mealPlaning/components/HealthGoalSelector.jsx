import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const HealthGoalSelector = ({ currentLanguage, selectedGoals, onGoalChange }) => {
  const [activeGoal, setActiveGoal] = useState(selectedGoals?.[0] || 'weight-management');

  const translations = {
    en: {
      title: "Health Goals",
      subtitle: "Select your primary health objectives",
      goals: {
        'weight-management': {
          name: 'Weight Management',
          description: 'Healthy weight loss or gain with traditional foods',
          tips: 'Focus on portion control and balanced nutrition'
        },
        'diabetes-control': {
          name: 'Diabetes Management',
          description: 'Blood sugar control with Sri Lankan cuisine',
          tips: 'Low glycemic index foods and proper meal timing'
        },
        'student-nutrition': {
          name: 'Student Nutrition',
          description: 'Brain-boosting meals for academic performance',
          tips: 'Energy-rich foods for concentration and memory'
        },
        'family-wellness': {
          name: 'Family Wellness',
          description: 'Multi-generational healthy eating plans',
          tips: 'Balanced nutrition for all age groups'
        },
        'heart-health': {
          name: 'Heart Health',
          description: 'Cardiovascular wellness through diet',
          tips: 'Low sodium, high fiber traditional recipes'
        },
        'digestive-health': {
          name: 'Digestive Health',
          description: 'Gut-friendly Ayurvedic nutrition',
          tips: 'Spices and herbs for digestive wellness'
        }
      }
    },
    si: {
      title: "සෞඛ්‍ය ඉලක්ක",
      subtitle: "ඔබේ මූලික සෞඛ්‍ය අරමුණු තෝරන්න",
      goals: {
        'weight-management': {
          name: 'බර කළමනාකරණය',
          description: 'සාම්ප්‍රදායික ආහාර සමඟ සෞඛ්‍ය සම්පන්න බර අඩු කිරීම හෝ වැඩි කිරීම',
          tips: 'කොටස් පාලනය සහ සමබර පෝෂණය කෙරෙහි අවධානය යොමු කරන්න'
        },
        'diabetes-control': {
          name: 'දියවැඩියා කළමනාකරණය',
          description: 'ශ්‍රී ලාංකික ආහාර සමඟ රුධිර සීනි පාලනය',
          tips: 'අඩු ග්ලයිසමික් දර්ශක ආහාර සහ නිසි ආහාර වේලාව'
        },
        'student-nutrition': {
          name: 'ශිෂ්‍ය පෝෂණය',
          description: 'අධ්‍යයන කාර්ය සාධනය සඳහා මොළය ශක්තිමත් කරන ආහාර',
          tips: 'අවධානය සහ මතකය සඳහා ශක්ති පිරුණු ආහාර'
        },
        'family-wellness': {
          name: 'පවුල් සෞඛ්‍යය',
          description: 'බහු පරම්පරා සෞඛ්‍ය සම්පන්න ආහාර සැලසුම්',
          tips: 'සියලුම වයස් කාණ්ඩ සඳහා සමබර පෝෂණය'
        },
        'heart-health': {
          name: 'හෘද සෞඛ්‍යය',
          description: 'ආහාර හරහා හෘද වාහිනී සෞඛ්‍යය',
          tips: 'අඩු සෝඩියම්, ඉහළ තන්තු සාම්ප්‍රදායික වට්ටෝරු'
        },
        'digestive-health': {
          name: 'ආහාර ජීර්ණ සෞඛ්‍යය',
          description: 'බඩට හිතකර ආයුර්වේද පෝෂණය',
          tips: 'ආහාර ජීර්ණ සෞඛ්‍යය සඳහා කුළුබඩු සහ ඖෂධ පැළෑටි'
        }
      }
    },
    ta: {
      title: "உடல்நல இலக்குகள்",
      subtitle: "உங்கள் முதன்மை உடல்நல நோக்கங்களைத் தேர்ந்தெடுக்கவும்",
      goals: {
        'weight-management': {
          name: 'எடை மேலாண்மை',
          description: 'பாரம்பரிய உணவுகளுடன் ஆரோக்கியமான எடை இழப்பு அல்லது அதிகரிப்பு',
          tips: 'பகுதி கட்டுப்பாடு மற்றும் சமநிலையான ஊட்டச்சத்தில் கவனம் செலுத்துங்கள்'
        },
        'diabetes-control': {
          name: 'நீரிழிவு மேலாண்மை',
          description: 'இலங்கை உணவுகளுடன் இரத்த சர்க்கரை கட்டுப்பாடு',
          tips: 'குறைந்த கிளைசெமிக் குறியீட்டு உணவுகள் மற்றும் சரியான உணவு நேரம்'
        },
        'student-nutrition': {
          name: 'மாணவர் ஊட்டச்சத்து',
          description: 'கல்வி செயல்திறனுக்கான மூளையை வலுப்படுத்தும் உணவுகள்',
          tips: 'கவனம் மற்றும் நினைவாற்றலுக்கான ஆற்றல் நிறைந்த உணவுகள்'
        },
        'family-wellness': {
          name: 'குடும்ப நலன்',
          description: 'பல தலைமுறை ஆரோக்கியமான உணவு திட்டங்கள்',
          tips: 'அனைத்து வயதினருக்கும் சமநிலையான ஊட்டச்சத்து'
        },
        'heart-health': {
          name: 'இதய ஆரோக்கியம்',
          description: 'உணவின் மூலம் இருதய நலன்',
          tips: 'குறைந்த சோடியம், அதிக நார்ச்சத்து பாரம்பரிய சமையல்'
        },
        'digestive-health': {
          name: 'செரிமான ஆரோக்கியம்',
          description: 'வயிற்றுக்கு நல்ல ஆயுர்வேத ஊட்டச்சத்து',
          tips: 'செரிமான நலனுக்கான மசாலாப் பொருட்கள் மற்றும் மூலிகைகள்'
        }
      }
    }
  };

  const goalIcons = {
    'weight-management': 'Scale',
    'diabetes-control': 'Activity',
    'student-nutrition': 'BookOpen',
    'family-wellness': 'Users',
    'heart-health': 'Heart',
    'digestive-health': 'Leaf'
  };

  const t = translations?.[currentLanguage];

  const handleGoalToggle = (goalId) => {
    const updatedGoals = selectedGoals?.includes(goalId)
      ? selectedGoals?.filter(id => id !== goalId)
      : [...selectedGoals, goalId];
    onGoalChange(updatedGoals);
  };

  return (
    <div className="bg-card rounded-lg border border-border heritage-shadow p-6">
      <div className="mb-6">
        <h2 className="text-xl font-poppins font-semibold text-foreground mb-2">
          {t?.title}
        </h2>
        <p className="text-sm text-muted-foreground font-inter">
          {t?.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.entries(t?.goals)?.map(([goalId, goal]) => (
          <div
            key={goalId}
            className={`p-4 rounded-lg border-2 organic-transition cursor-pointer ${
              selectedGoals?.includes(goalId)
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
            }`}
            onClick={() => handleGoalToggle(goalId)}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                selectedGoals?.includes(goalId)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={goalIcons?.[goalId]} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-poppins font-medium text-foreground mb-1">
                  {goal?.name}
                </h3>
                <p className="text-xs text-muted-foreground font-inter leading-relaxed">
                  {goal?.description}
                </p>
              </div>
              {selectedGoals?.includes(goalId) && (
                <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Active Goal Details */}
      {selectedGoals?.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Lightbulb" size={16} className="text-accent" />
            <span className="font-poppins font-medium text-foreground text-sm">
              {currentLanguage === 'en' ? 'Quick Tip' : currentLanguage === 'si' ? 'ඉක්මන් උපදෙස' : 'விரைவு குறிப்பு'}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-inter">
            {t?.goals?.[selectedGoals?.[0]]?.tips}
          </p>
        </div>
      )}
    </div>
  );
};

export default HealthGoalSelector;