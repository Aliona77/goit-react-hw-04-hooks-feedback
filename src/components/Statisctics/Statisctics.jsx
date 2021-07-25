import React from 'react';
import PropTypes from 'prop-types'
import { List, Item } from "./Statisctics.styles";

export default function Statisctics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <List>
            <Item>Good: { good}</Item>
            <Item>Neutral: { neutral}</Item>
            <Item>Bad: { bad}</Item>
            <Item>Total: { total}</Item>
            <Item>Positive feedback: {positivePercentage }%</Item>
    </List>
)
};
Statisctics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}