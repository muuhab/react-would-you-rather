export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function calculateVotes(votes1,votes2){
    const length=votes1.length+votes2.length
    const option1Number=length-votes1.length
    const option2Number=length-votes2.length
    return {
        option1: votes1.length!==0?Math.round(votes1.length/length*100):0,
        option2: votes2.length!==0?Math.round(votes2.length/length*100):0,
        option1Number,
        option2Number,
        length
    }

}