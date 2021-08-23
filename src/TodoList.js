import React from "react";
import { connect } from "react-redux";
import {
  getAddTodoItemAction,
  getChangeInputValueAction,
  getDeleteTodoItemAction,
} from "./store/actionCreators";

const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleDeleteTodoItem,
    handleInputChange,
    handleBtnClick,
  } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleBtnClick}>submit</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleDeleteTodoItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 连接规则,把store中的数据映射到组件的props中
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

// 对store的数据做修改
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getChangeInputValueAction(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = getAddTodoItemAction();
      dispatch(action);
    },
    handleDeleteTodoItem(index) {
      const action = getDeleteTodoItemAction(index);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
