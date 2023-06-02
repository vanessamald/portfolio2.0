import { useEffect, useState } from 'react';

const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
    
          if (scrollTop > 1000) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      return isScrolled;
}

export default useScroll;
