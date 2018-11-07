import { observable,action } from 'mobx'

class Store{
    @observable slider = false;
    @observable loading = false;
    @action toggleSlider = (data)=>{
        this.slider = !this.slider;
    }
    @action updateLoading = (data)=>{
        this.loading = data;
    }
}

export default new Store();