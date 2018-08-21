import React, { Component } from 'react';
import Row from '../components/Table/Row';
import ErrorBoundary from "../ErrorBoundary";


class RowContainer extends Component {
  static formatDate(date) {
    if (date !== 0 && date !== '0000-00-00') {
      const n = date.indexOf('T');
      date = date.substring(0, n !== -1 ? n : date.length);
      if (date.substring(4, 5) === '-') {
        const year = date.substring(0, 4);
        date = date.substring(5, date.length);
        date = `${date}-${year}`;
      }
      return date;
    }
  }

  static formatNum(num) {
    if (num !== 0) return num;
  }

  static formatUnit(unit) {
    return unit === 1 ? 'Lbs' : 'Kg';
  }

  render() {
    const row = this.props.row;

    return (
      <Row
        name={row.name}
        reps={RowContainer.formatNum(row.reps)}
        date={RowContainer.formatDate(row.date)}
        weight={RowContainer.formatNum(row.weight)}
        lbs={RowContainer.formatUnit(row.lbs)}
        handleClick={this.props.handleClick}
      />
    )
  }
}

export default RowContainer
