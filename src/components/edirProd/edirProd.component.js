import axios from 'axios';

export default  {
  name: 'edir-prod',
  components: {}, 
	props: [],
	brand:'',
  data () {
	return {
		dataProduct:[]
	}
  },
  created:function(){
	this.geteditProduct();
  },
  computed: {

  },
  mounted () {

  },
  methods: {
		geteditProduct:function(){
			var productId = this.$route.query.prodId;
			axios.get('https://fierce-springs-22762.herokuapp.com/api/product/'+ productId).then((res)=>{
			this.dataProduct = res.data.res;
			console.log(this.dataProduct)
			})
		},
		editProduct:function(id){
			var newData = {
				'brand': this.brand,
				'color': $('.color').val(),
				'made_in': $('.made_in').val(),
				'quality': $('.quality').val(),
				'size': $('.size').val(),
				'price': $('.price').val(),
				'description': $('.description').val(),
			};
			console.log(newData);
			
			axios.post('https://fierce-springs-22762.herokuapp.com/api/update/prod/'+ id,newData).then((res)=>{
				console.log(newData);
				console.log(this.dataProduct);
			})
		}
  }
}
