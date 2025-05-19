import { useUser } from '@/context/UserContext';
import { languages } from '@/lib/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

const LanguageSwitcher = ({ variant = 'light' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useUser();

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger 
        className={
          variant === 'dark' 
            ? "bg-neutral-700 border-neutral-600 text-white" 
            : "bg-neutral-100 border-neutral-300 text-neutral-700"
        }
        style={{ minWidth: '120px' }}
      >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
