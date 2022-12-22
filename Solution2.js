function monkeyCount(n) {
    if (n<1){
      return [];
    }else{
      let count=monkeyCount(n-1);
      count.push(n);
      return count;
    }
    }