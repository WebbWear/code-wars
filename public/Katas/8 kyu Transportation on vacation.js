function rentalCarCost(d) {
    const base = 40;
    
      if (d >= 7) return d * base - 50;
      if (d >= 3) return d * base - 20;
      
      return d * base;
    
    }