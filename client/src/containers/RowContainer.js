import React, { Component } from 'react';
import Row from '../components/Table/Row';


class RowContainer extends Component {
  /* clean up date output */
  static formatDate(date) {
    if (date && date !== 0 && date !== '0000-00-00') {
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

  /* only display numbers !== 0 */
  static formatNum(num) {
    if (num !== 0) return num;
  }

  /* convert from boolean to lbs/kg */
  static formatUnit(unit) {
    return unit === 1 ? 'Lbs' : 'Kg';
  }

  render() {
    const row = this.props.row;  // row === workout data (name, reps, weight etc.)

    return (
      /* handleClick updates alert text */
      <Row
        entriesID={this.props.entriesID}
        databaseID={this.props.databaseID}
        name={row.name}
        reps={RowContainer.formatNum(row.reps)}
        date={RowContainer.formatDate(row.date)}
        weight={RowContainer.formatNum(row.weight)}
        lbs={RowContainer.formatUnit(row.lbs)}
        handleClick={this.props.handleClick}
        handleDelete={this.props.handleDelete}
      />
    )
  }
}

export default RowContainer
