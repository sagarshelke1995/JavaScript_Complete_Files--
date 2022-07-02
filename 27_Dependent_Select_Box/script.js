let brands = [{id:1,name:'Maruthi Suzuki'},{id:2,name:'Suzuki NEXA'},
                {id:3,name:'Hyndai Motors'},{id:4,name:'TATA Motors'}];

let models = [{brand_id:1,name:'Swift'},{brand_id:1,name:'Brezza'},
                {brand_id:1,name:'Dzire'},{brand_id:1,name:'Ertiga'},{brand_id:2,name:'Baleno'},
                {brand_id:2,name:'Ciaz'},{brand_id:2,name:'Ignis'},{brand_id:2,name:'SCross'},
                {brand_id:3,name:'Creta'},{brand_id:3,name:'Grand i20'},
                {brand_id:3,name:'Grand i10'},{brand_id:3,name:'Hyndai Verna'},
                {brand_id:4,name:'TATA NEXA'},{brand_id:4,name:'TATA JEST'},
                {brand_id:4,name:'TATA Harrier'},{brand_id:4,name:'TATA Tiago'}];

// GEt the HTML Elements
let brandSelectBox = document.querySelector('#brand-select');
let modelSelectBox = document.querySelector('#model-select');

// display brands on the page
let brandOptions = `<option value="">Select a Brand</option>`;
for(let brand of brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option>\n`;
}
brandSelectBox.innerHTML = brandOptions;

// Change Event on Brand SelectBox
brandSelectBox.addEventListener('change',function() {
    let selectedId = Number.parseInt(brandSelectBox.value);
    let selectedModels = models.filter(function(model) {
        return model.brand_id === selectedId;
    });
    let modelOptions = `<option value="">Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option>${model.name}</option>\n`;
    }
    modelSelectBox.innerHTML = modelOptions;
});