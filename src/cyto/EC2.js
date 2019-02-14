class EC2 {
  constructor(data, parent, source){
    this.data = data;
    this.id = data.InstanceId;
    this.source = source;
    this.parent = parent;
  }

  getEC2Object(){
    if(this.source !== null){
      return [
        {group: 'nodes', data: { id: this.id, parent:this.parent, label: "EC2-"+this.id}, classes: 'EC2'},
        { group: 'edges', data: { id: this.id+this.source, source: this.source, target: this.id}}
      ]
    }
    else{
      return {group: 'nodes', data: { id: this.id, parent:this.parent,label: "EC2-"+this.id}, classes: 'EC2'}
    }
  }

}

export default EC2;