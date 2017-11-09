import axios from 'axios';

const dash =  {
  name: 'dashboard',
  props: [],
  mounted() {
    
  },
  data() {
	return {
		catArray: [],
		onlyCat: [],
		name: '',
		image: '',
		name_up: '',
		image_up: '',
		dialog: false,
		headers: [
			{ text: 'ID', value: 'id' },
			{ text: 'Category Image', value: 'cat_image' },
			{ text: 'Category Name', value: 'cat_name' },
			{ text: 'Create Date', value: 'cat_date' },
			{ text: 'Action', value: 'action' }
		  ],
	}
  },
  created:function(){
	this.getCat();
  },
  methods: {
	getCat:function(){
		axios.get('https://fierce-springs-22762.herokuapp.com/api').then((res)=>{
			console.log(res);
			this.catArray = res.data.res;
			console.log(this.catArray[0]);
		})
	},
	getCatOne:function(id){
		console.log(id);
		axios.get('https://fierce-springs-22762.herokuapp.com/api/category/'+ id).then((res)=>{
			
			this.onlyCat = res.data.res;
			console.log(this.onlyCat);
		})
	},
	newCat:function(){
		var data = {
			'cat_name': this.name,
			'cat_image': this.image,
			'cat_date': new Date()
		}
		axios.post('https://fierce-springs-22762.herokuapp.com/api/create',data).then((res)=>{
			console.log(res);
			if(res.data.error === false){
				$('#close').trigger('click');
				this.getCat();
				this.name = '';
				this.image = '';
			}
		})
	},
	delCat:function(id){
		axios.delete('https://fierce-springs-22762.herokuapp.com/api/delete/'+ id).then((res)=>{
			console.log(res.err);
			if(res.data.error === false){
				this.getCat();
			}
		})
	},
	updateCat:function(id){
		var upData = {
			'cat_name': $('#name_up').val(),
			'cat_image': $('#image_up').val(),
			'cat_date': new Date()
		};
		axios.post('https://fierce-springs-22762.herokuapp.com/api/update/'+ id,upData).then((res)=>{
			console.log(res);
			if(res.data.error === false){
				this.getCat();
				this.name_up = '';
				this.image_up = '';
			}
		})
	}
  },
  computed: {

  },
  component:{
  }
}

export default dash;
