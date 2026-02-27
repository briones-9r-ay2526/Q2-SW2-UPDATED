function getDiscount(){
    let laptopPrice = Number(document.getElementById("budgetInput").value);
    let discount = Number(laptopPrice * .2).toFixed(2);

    document.getElementById("dPop").innerHTML = `
        <div class="discount rounded">
            <h4 class="text-light">Recommended Brands:</h4>
            <div class="brandbtn">
                <button type="button" class="btn btn-outline-info">Acer</button>
                <button type="button" class="btn btn-outline-info">Asus</button>
                <button type="button" class="btn btn-outline-info">Lenovo</button>
            </div>
            <br>
            <p class="text-light">Eligible Discount: <span class="badge bg-danger">$(discount)</span></p>
        </div>
    
    `;
}

function getLoc(){ 

    document.getElementById("lPop").innerHTML = `
        <div class="location rounded">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQOu117AkawylQF_POojkhD38UyC8cUcMtg&s">
            <hr>
            <div class="text">
                <p>Quezon City: SM North EDSA (5/F Annex), Trinoma Mall (Level 2), Gateway Mall (Cubao), and SM Fairview</p>
                <p>Mandaluyong City: SM Megamall (4/F Bldg. B), SM Cherry Shaw</p>
                <p>San Juan City: VMall Greenhulls (3/F) and GH Mall</p>
                <p>Taguig City: Market! Market! (4/F) </p>
                <p>Makati City: Glorieta 2 (3/F) and One Ayala</p>
                <p>Pasay/Manila: SM Mall of Asia (2/F North Parking)</p>
                <p>Marikina City: SM Marikina</p>
            </div>
        </div>

    `;
}


