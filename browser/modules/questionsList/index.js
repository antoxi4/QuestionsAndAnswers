'use strict';

import React from 'react';
import RowItem from './components/rowItem';
import { connect } from 'react-redux';
import { QuestionsListActions } from '../../common/actions';

const quest = [
  {answers: 0, views: 0, title: 'Python Data Structure creating using Class contain huge information'},
  {answers: 0, views: 0, title: 'Datetime does not contain constructor that takes 4 arguments'},
  {answers: 0, views: 0, title: 'How can I apply vimrc conf file in .py'},
  {answers: 0, views: 0, title: 'Managing Multi Tenant DB Connections'},
  {answers: 0, views: 0, title: 'How we can add new sections on home page dynamically in shopify?'},
  {answers: 0, views: 0, title: 'How does Xamarin launch your Android project?'},
];

const QuestionsList = React.createClass({
  componentWillMount() {
    this.props.getQuestionsFromServer();
  },

  renderRows() {
    return this.props.questions.map((question, idx) => (
      <RowItem key={idx} data={question} />
    ));
  },

  render() {
    return (
      <div style={styles.mainContainer}>
        {this.renderRows()}
      </div>
    );
  }
});

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  toolContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  actionContainer: {
    paddingLeft: 10,
    cursor: 'pointer',
    paddingRight: 10,
  }
};

const mapStateToProps = (state) => {
  return {
    questions: state.questionslist.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionsFromServer: () => {
      dispatch(QuestionsListActions.getQuestionsFromServer());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
