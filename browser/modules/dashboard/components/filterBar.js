'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { DashBoardActions } from '../../../common/actions';

const FilterBar = React.createClass({

  renderFilters() {
    return this.props.filters.map((filter, idx) => (
      <div
        key={idx}
        className={this.props.activeFilterId === idx ? 'activeFilter' : 'filter'}
        style={styles[this.props.activeFilterId === idx ? 'activeFilterItem' : 'filterItem']}
        onClick={() => this.props.setActiveFilterId(filter.id)}
      >
        {filter.title}
      </div>
    ));
  },

  render() {
    return (
      <div style={styles.filterContainer}>
        {this.renderFilters()}
      </div>
    );
  }
});

const styles = {

  filterContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  activeFilterItem: {
    cursor: 'default',
    borderLeft: '1px solid #CFD8DC',
    borderRight: '1px solid #CFD8DC',
    borderTop: '2px solid #FFA726',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  filterItem: {
    cursor: 'pointer',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.dashboard.filters,
    activeFilterId: state.dashboard.activeFilterId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveFilterId: (filterId) => {
      dispatch(DashBoardActions.setActiveFilterId(filterId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
