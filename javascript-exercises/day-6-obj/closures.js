// Counter 1 + 2
function firstCounter (num) {
    var count = num;
    var letsCount = function() {
        return ++count;
    };
    return letsCount;
};



// Counter 3

function counter(num) {
    var count = num;

return {
    increment: function() {
        count++;
        return count;
    },
    decrement: function() {
        count--;
        return count;
    }
}

};

count = counter(5);
count.increment();
console.log(count.increment());
