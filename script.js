most_popular_words_inView = false;
word_count_inView = false;
most_popular_words_melodrama_inView = false;
most_popular_words_pureHeroine_inView = false;

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

window.addEventListener("scroll", function(){
    if ($('#chart-word-count').isOnScreen() && word_count_inView == false) {
        word_count_inView = true;
        showWordCount();
    }

    if ($('#chart-most-popular-words').isOnScreen() && most_popular_words_inView == false) {
        most_popular_words_inView = true;
        showMostPopularWords();
    }

    if ($('#chart-most-popular-words-melodrama').isOnScreen() && most_popular_words_melodrama_inView == false) {
        most_popular_words_melodrama_inView = true;
        showMostPopularWords_Melodrama();
    }

    if ($('#chart-most-popular-words-pureHeroine').isOnScreen() && most_popular_words_pureHeroine_inView == false) {
        most_popular_words_pureHeroine_inView = true;
        showMostPopularWords_pureHeroine();
    }

})


function showWordCount(){
    var ctx = document.getElementById("chart-word-count").getContext('2d');
    var dataValues = [0, 1, 0, 1, 1, 5, 5, 2, 6, 5, 1];
    var dataLabels = [0, 34,  50, 67, 84, 100, 117, 134, 150, 167, 201];
    var myChart = new Chart(ctx, {
    type: 'bar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels,
        datasets: [{
            label: 'Bins',
            data: dataValues,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Histograma da contagem de palavras em cada música",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    barPercentage: 1.3,
                    ticks: {
                        max: 3,
                    }
                },
                {
                    display: true,
                    ticks: {
                        autoSkip: false,
                        max: 4,
                        fontColor: 'white'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem de palavras',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem de músicas',
                        fontColor: 'white'
                    },
                    ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//---------------------

function showMostPopularWords(){
    var ctx_most_popular_words = document.getElementById("chart-most-popular-words").getContext('2d');
    var dataValues_most_popular_words = [68, 56, 40, 40, 39, 36, 34, 33, 31, 30];
    var dataLabels_most_popular_words = ['like','love','know','boom','people','call','yeah','want','never','make'];
    var most_popular_words_Chart = new Chart(ctx_most_popular_words, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais populares",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Quantidade de ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra analisada',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//--------------------


function showMostPopularWords_Melodrama(){
    var ctx_most_popular_words_melodrama = document.getElementById("chart-most-popular-words-melodrama").getContext('2d');
    var dataValues_most_popular_words_melodrama = [40, 25, 20, 20, 17, 16, 16, 15, 14, 14];
    var dataLabels_most_popular_words_melodrama = ['boom','love','when','light','make','know','mind','supercut','things','call'];
    var most_popular_words_Chart_melodrama = new Chart(ctx_most_popular_words_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_melodrama,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais populares em Melodrama",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Quantidade de ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra analisada',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


function showMostPopularWords_pureHeroine(){
    var ctx_most_popular_words_pureHeroine = document.getElementById("chart-most-popular-words-pureHeroine").getContext('2d');
    var dataValues_most_popular_words_pureHeroine = [63, 38, 31, 31, 29, 25, 24, 24, 24, 22];
    var dataLabels_most_popular_words_pureHeroine = ['like','people','love','yeah','never','feels','know','biting','talking','talk'];
    var most_popular_words_Chart_pureHeroine = new Chart(ctx_most_popular_words_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_pureHeroine,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais populares em Pure Heroine",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Quantidade de ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra analisada',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}
