export const Title = function(){
    let list = [
        '隐约雷鸣 阴霾天空 但盼风雨来 能留你在此',
        '云之彼方,约定的地方',
        '彼方为谁,无我又问',
        '九月湿露,待君之前',
        'Darling',
    ]
    let c = Math.floor(Math.random()*list.length);
    window.document.title = list[c];
}