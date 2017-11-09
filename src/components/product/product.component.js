import axios from 'axios';

export default  {
  name: 'product',
  props: [],
  mounted() {
    
  },
  data() {
    return {
		dataMenu:[],
	  	show:false,
		dataProd:[],
		catSingle: [],
		prodId:20,
	  	dialog: false,
		made_in: '',
		catName:[],
		brend: '',
		color: '',
		quality: '',
		price: '',
		size: '',
		cat: '',
		image: '',
		des: '',
		 states: [
        'Alabama','Alaska','American Samoa','Arizona',
        'Arkansas','California','Colorado','Connecticut',
        'Delaware','District of Columbia','Federated States of Micronesia',
        'Florida','Georgia','Guam','Hawaii','Idaho',
        'Illinois','Indiana','Iowa','Kansas','Kentucky',
        'Louisiana','Maine','Marshall Islands','Maryland',
        'Massachusetts','Michigan','Minnesota','Mississippi',
        'Missouri','Montana','Nebraska','Nevada',
        'New Hampshire','New Jersey','New Mexico','New York',
        'North Carolina','North Dakota','Northern Mariana Islands','Ohio',
        'Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico',
        'Rhode Island','South Carolina','South Dakota','Tennessee',
        'Texas','Utah','Vermont','Virgin Island','Virginia',
        'Washington','West Virginia','Wisconsin','Wyoming'
      ]
    }
  },
  created:function(){
	this.getCat();
	this.getProduct(20);
  },
  methods: {
	getCat:function(){
		axios.get('https://fierce-springs-22762.herokuapp.com/api').then((res)=>{
			console.log(res);
			this.dataMenu = res.data.res;
			console.log(this.dataMenu);
		})
	},
	getProduct:function(id){
		this.prodId = id;
		axios.get('https://fierce-springs-22762.herokuapp.com/api/product/category/'+ this.prodId).then((res)=>{
			console.log(res);
			this.dataProd = res.data.res;
		});
		
		axios.get("https://fierce-springs-22762.herokuapp.com/api/category/"+ this.prodId).then((res)=>{
			console.log(res);
			this.catSingle = res.data.res;
			console.log(this.catSingle);
		})
	},
	createProduct:function(){
		var dataPro = {
			"brand": this.brend,
			"price":Number(this.price),
			"made_in": this.made_in,
			"quality": this.quality,
			"size": this.size,
			"color": this.color,
			"description": this.des,
			"image": this.image,
			"category": Number($("#exampleFormControlSelect1").val()),
		};
		axios.post('https://fierce-springs-22762.herokuapp.com/api/product/create',dataPro).then((res)=>{
			console.log(res);
			if(res.data.error === false){
				this.dialog = false;
				this.getProduct(Number($("#exampleFormControlSelect1").val()));
			}
		})
	},
	deleteProduct:function(id){
		axios.delete('https://fierce-springs-22762.herokuapp.com/api/delete/product/'+ id).then((res)=>{
			console.log(res);
			this.getProduct(20);
		})
	}
  },
  computed: {
  }
}

