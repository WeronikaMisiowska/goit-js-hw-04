const profile = {
    username: "Jacob",
    playTime: 300,
  
    updatePlayTime(hours) {
       this.playTime += hours;
    },
         
        changeUsername(newName) {
        this.username = newName;
    },
        
        getInfo() {
        return `${this.username} ma ${this.playTime} aktywnych godzin`;
}
};

