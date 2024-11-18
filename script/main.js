$(document).ready(function () {
	$.each(data, function (index, animal) {
		let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
                <div class="card-header">
                    <div class="card-number group-${animal.group}">${animal.group}${animal.group_number}</div>
                    <div class="card-title">${animal.name}</div>
                </div>
                <img src="images/${animal.group}${animal.group_number}.jpg" alt="${animal.name}" class="card-image" />

                <div class="card-trivia">${animal.trivia}</div>
                <div class="statistics">
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/weight.png" alt="weight">
                        </div>
                        <div class="stat-value">${animal.max_weight}</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/length.png" alt="length">
                        </div>
                        <div class="stat-value">${animal.max_length}</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/age.png" alt="maximum age">
                        </div>
                        <div class="stat-value">${animal.max_age}</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/speed.png" alt="maximum speed">
                        </div>
                        <div class="stat-value">${animal.top_speed}</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/offspring.png" alt="offspring count per cycle">
                        </div>
                        <div class="stat-value">${animal.litter_size}</div>
                    </div>
                    <div class="statistics-pair">
                        <div class="stat-name">
                            <img src="images/icons/death.png" alt="caused human casualties per year">
                        </div>
                        <div class="stat-value">${animal.deaths}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);

		$("#wrapper").append(divBox);
	});
});

/* let div = document.createElement('div');
div.className = 'card-wrapper';
div.innerText = animal.name;
document.getElementById("wrapper").appendChild(div); */
