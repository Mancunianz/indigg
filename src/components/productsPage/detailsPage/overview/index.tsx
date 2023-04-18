'use client';
import { Typography } from '@nm/@mui/material';
import { map } from 'lodash';
import { Fragment } from 'react';

const Overview = () => {
  return (
    <>
      <Typography variant={'h2'} fontWeight={500} mb={4}>
        Introduction
      </Typography>
      {map(gameDescription, (description, index) => {
        return (
          <Fragment key={index}>
            <Typography variant={'body1'} paragraph>
              {description}
            </Typography>
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default Overview;

const gameDescription = [
  'Gods Unchained is one of the earliest games to adopt blockchain technology alongside the likes of Axie Infinity and Splinterlands. The studio behind Gods Unchained wanted to reshape ownership for card game players who are used to getting their library wiped out every rotation. In Gods Unchained, players can completely own their digital items, giving players the freedom to trade, sell, and use their cards within or beyond the game with other titles who accept integrating their NFTs.',
];