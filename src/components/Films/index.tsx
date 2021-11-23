import React from 'react';
import { v4 as uuidv4 } from 'uuid';
type Props = { films: string[], updateList: (item: string[]) => void };
type State = { editText: object };

class Films extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {editText: {}};
    this.editFilm = this.editFilm.bind(this);
    this.deleteFilm = this.deleteFilm.bind(this);
  }

  componentDidMount() {
    console.log('hello from react');
  }
  componentWillUnmount(){}

  deleteFilm(i:number) {
    this.props.updateList(this.props.films.filter((_,index) => i !== index))
  }

  editFilm(i:number) {
    const tempFilms = [...this.props.films];
    tempFilms[i] = this.state.editText[i];
    this.props.updateList(tempFilms);
  }

  handleEdit(e:any) {
    this.setState({
      editText:{
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    const films = this.props.films.map((item, index) => {
      //const contentID = uuidv4();
      return (<li key={index}>
        {item}
        <input type="text" 
              placeholder="edit"
              name={`${index}`}
              value={this.state.editText.index}
              onChange={(e)=>this.handleEdit(e)}/>

        <span onClick={() => this.editFilm(index)}>{'\u2705'}</span>
        <span onClick={() => this.deleteFilm(index)}>{'\u274C'}</span>
      </li>)
    });
  
    return <ul>{films}</ul>
  }
}

export default Films; // євген ковальчук