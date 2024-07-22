function calcAverageCalories(days) {
    
      if (days.length === 0) {
        return 0;
    }

     let totalCalories = days.reduce((total, day) => total + day.calories, 0);

    let numDays = days.length;    
        
    let averageCalories = totalCalories / numDays;
    
    return averageCalories;
}
