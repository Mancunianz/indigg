import Grid2 from '@mui/material/Unstable_Grid2';
import { capitalize, keys, map, pick, replace, startCase } from 'lodash';
import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import Wrapper from '@cc/wrapper';
import MLink from '@cc/mLink';
import { linkSections, socialLinks } from '@/src/store/footerLinks';

const BaseFooter = () => {
  return (
    <Wrapper
      sectionProps={{
        sx: {
          background:
            'linear-gradient(to bottom, rgba(187, 0, 255, 0.14), #000)',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
          border: '1px solid #a13bc624',
        },
      }}
    >
      <Grid2
        py={{ xs: 0, sm: 4, lg: 17 }}
        px={{ xs: 0, sm: 4 }}
        width={1}
        columnSpacing={4}
        rowSpacing={8}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        container
      >
        {map(keys(linkSections), (linkSectionName, index) => {
          return (
            <Grid2
              key={index}
              md={6}
              lg={4}
              xl={3}
              xxl={2.4}
              direction={'column'}
              alignItems={'flex-start'}
              pt={{ xs: 0, sm: 2 }}
            >
              <Typography variant={'h5'} component={'h2'} fontWeight={500}>
                {linkSectionName}
              </Typography>
              <List>
                {map(
                  keys(linkSections[linkSectionName]),
                  (linkName, index2) => {
                    return (
                      <ListItem dense disableGutters key={index + index2}>
                        <MLink
                          href={linkSections[linkSectionName][linkName]}
                          variant={'text'}
                          disableRipple
                          activeColor={'primary.light'}
                          sx={{ color: 'text.secondary' }}
                          inactiveColorOpacity={0.8}
                          activeUnderline
                        >
                          <Typography variant={'body1'} component={'span'}>
                            {capitalize(
                              replace(startCase(linkName), ' And ', ' & '),
                            )}
                          </Typography>
                        </MLink>
                      </ListItem>
                    );
                  },
                )}
              </List>
            </Grid2>
          );
        })}

        {/* 2nd */}
        <Grid2
          md={6}
          lg={4}
          xl={3}
          xxl={2.6}
          direction={'column'}
          alignItems={'flex-start'}
          pt={{ xs: 0, sm: 2 }}
        >
          <Typography variant={'h5'} component={'h2'} fontWeight={500}>
            Kratos Studios Ltd.
          </Typography>
          <List>
            <ListItem dense disableGutters>
              <MLink
                href=""
                variant={'text'}
                disableRipple
                activeColor={'primary.light'}
                sx={{ color: 'text.secondary' }}
                inactiveColorOpacity={0.8}
                activeUnderline
              >
                <Typography
                  variant={'body1'}
                  component={'span'}
                  fontWeight={300}
                >
                  OMC chambers <br /> wickhams cay 1,
                  <br />
                  road town,tortola,
                  <br />
                  british virgin island
                </Typography>
              </MLink>
            </ListItem>
            <ListItem dense disableGutters>
              <MLink
                href=""
                variant={'text'}
                disableRipple
                activeColor={'primary.light'}
                sx={{ color: 'text.secondary' }}
                inactiveColorOpacity={0.8}
                activeUnderline
              >
                <Typography
                  variant={'body1'}
                  component={'span'}
                  fontWeight={300}
                >
                  mail us at
                </Typography>
                <Typography
                  variant={'body1'}
                  component={'span'}
                  fontWeight={500}
                  ml={0.5}
                >
                  contact@indi.gg
                </Typography>
              </MLink>
            </ListItem>
          </List>
        </Grid2>

        <Grid2
          md={6}
          lg={4}
          xl={3}
          xxl={2.9}
          direction={'column'}
          alignItems={'flex-start'}
          pt={{ xs: 0, sm: 2 }}
        >
          <Typography variant={'h5'} component={'h2'} fontWeight={500}>
            Join our Community
          </Typography>
          {map(socialLinks, (socialLink, index) => {
            const { name, icon: Icon, link, color } = socialLink;
            return (
              <MLink
                key={index}
                href={link}
                title={name}
                aria-label={name}
                sx={{
                  px: 0,
                  width: '60px',
                  height: '60px',
                  borderRadius: 1.25,
                  background: 'unset',
                  '&:hover': {
                    background: color,
                  },
                }}
              >
                <Icon fontSize={'large'} />
              </MLink>
            );
          })}
        </Grid2>

        {/* 2nd */}
      </Grid2>
      {/* <Divider
        variant={'fullWidth'}
        flexItem
        orientation={'horizontal'}
        sx={{
          border: 'none',
          height: '1px',
          opacity: 0.45,
          background: 'linear-gradient(116.85deg, #FC466B 0%, #3F5EFB 100%)',
        }}
      /> */}
      {/* <Grid2
        container
        width={1}
        py={{ xs: 3, sm: 6.5 }}
        alignItems={'flex-start'}
      >
        <Grid2
          component={Stack}
          flexDirection={'row'}
          lg={6}
          order={{
            lg: 2,
          }}
          columnGap={4}
          rowGap={2}
          alignItems={'center'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          mb={{ xs: 2, lg: 0 }}
        >
          {map(socialLinks, (socialLink, index) => {
            const { name, icon: Icon, link, color } = socialLink;
            return (
              <MLink
                key={index}
                href={link}
                title={name}
                aria-label={name}
                sx={{
                  px: 0,
                  width: '60px',
                  height: '60px',
                  borderRadius: 1.25,
                  background:
                    'linear-gradient(116.85deg, rgba(252, 70, 107, 0.4) 0%, rgba(63, 94, 251, 0.06) 100%)',
                  '&:hover': {
                    background: color,
                  },
                }}
              >
                <Icon fontSize={'large'} />
              </MLink>
            );
          })}
        </Grid2>
        <Grid2
          lg={3}
          order={{
            lg: 1,
          }}
          margin={{ xs: 'auto', md: 'unset' }}
        >
          <Typography variant={'body1'}>
            © 2023 INDIGG. All rights reserved. <br />
            INDIGG is a registered trademark
          </Typography>
        </Grid2>
        <Grid2
          lg={3}
          order={{
            lg: 3,
          }}
          margin={{ xs: 'auto', md: 'unset' }}
        >
          {map(
            keys(
              pick(linkSections['help'], [
                'terms-and-conditions',
                'privacy-policy',
              ]),
            ),
            (link, index) => {
              return (
                <MLink
                  href={linkSections['help'][link]}
                  key={index}
                  sx={{ py: { xs: 0, md: 1 } }}
                >
                  <Typography variant={'body1'} component={'span'}>
                    {capitalize(replace(startCase(link), ' And ', ' & '))}
                  </Typography>
                </MLink>
              );
            },
          )}
        </Grid2>
      </Grid2> */}
    </Wrapper>
  );
};

export default BaseFooter;