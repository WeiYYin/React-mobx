import { observable,action } from 'mobx'

class Store{
    @observable slider = false;
    @observable loading = false;
    @action toggleSlider = (data,fn)=>{
        this.slider = !this.slider;
        if(!!fn){fn()}
    }
    @action updateLoading = (data)=>{
        this.loading = data;
    }
}

export default new Store();