import React, {Component} from 'react'
import styles from './main.css';

export default class Todo extends Component{

    render(){
      let {id, todo, onRemove} = this.props;
      return(
          <li>{todo} <button className={styles.deleteButton}onClick={() => onRemove(id)}></button></li>
      );
    }
}
