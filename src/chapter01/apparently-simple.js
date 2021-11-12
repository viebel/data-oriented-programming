class Member {
    isBlocked;

    displayBlockedStatusTwice() {
        console.log(this.isBlocked);
        console.log(this.isBlocked);
    }
}

member.displayBlockedStatusTwice();
