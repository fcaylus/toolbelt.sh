import Page from '../src/components/Page';
import { Container, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Refresh } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const loremIpsumStart = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const loremIpsumData = [
  'Etiam ullamcorper leo at euismod cursus.',
  'Nam ac nulla bibendum, congue mi ut, efficitur arcu.',
  'Sed lacinia leo in consectetur finibus.',
  'Vestibulum ultrices arcu eu tellus vehicula, a dapibus sapien imperdiet.',
  'Donec luctus ante sed pharetra dignissim.',
  'In sit amet lacus quis quam ultricies luctus.',
  'Maecenas malesuada lorem sed elit consectetur congue.',
  'Ut id est pretium, ultrices dolor sed, varius nibh.',
  'Curabitur tristique nisi feugiat dui facilisis ullamcorper.',
  'Aliquam eleifend tellus vitae nunc dapibus scelerisque.',
  'Aenean rhoncus libero in dapibus semper.',
  'Praesent at metus ut ipsum vestibulum condimentum.',
  'Nam in diam id enim facilisis tincidunt.',
  'Donec ac magna pharetra, auctor eros ac, sodales velit.',
  'Aenean laoreet tellus vel sem facilisis, tristique ornare nisi eleifend.',
  'Integer malesuada magna at condimentum molestie.',
  'Fusce ullamcorper lorem id magna suscipit fermentum.',
  'Nulla ultricies diam dapibus sapien porttitor, a dignissim lectus aliquam.',
  'Fusce sit amet nisi ultrices, scelerisque nisi eu, suscipit risus.',
  'Maecenas malesuada enim eget quam mattis, sit amet rutrum ex porttitor.',
  'Mauris rutrum mi a dictum vestibulum.',
  'Aenean non nulla ut eros pulvinar cursus.',
  'Vestibulum at libero commodo lectus volutpat eleifend ut eu est.',
  'Vestibulum eu mi vitae augue accumsan tincidunt.',
  'Aliquam quis velit gravida, pretium nulla ut, vestibulum velit.',
  'Sed semper elit vel purus facilisis, vel egestas lorem aliquet.',
  'Nam pretium nibh sit amet purus varius, a efficitur justo fringilla.',
  'Nullam gravida eros quis eleifend fermentum.',
  'Duis pretium dolor in aliquet pretium.',
  'Suspendisse a eros posuere, egestas est aliquam, porttitor arcu.',
  'Praesent a enim vel risus posuere feugiat vitae id dolor.',
  'Curabitur eu erat sed sem ultricies ullamcorper.',
  'Ut malesuada sapien nec metus pulvinar congue.',
  'Integer ultricies leo vel nisi convallis, vel varius velit pharetra.',
  'Nunc maximus ipsum at odio condimentum elementum.',
  'Pellentesque fringilla leo vel nisl finibus, non tincidunt felis iaculis.',
  'Vivamus fringilla urna eget nisi sagittis sodales.',
  'Quisque nec turpis et sapien posuere cursus ac sodales tellus.',
  'Nulla dapibus tellus a rutrum porta.',
  'Sed placerat eros ut sapien vestibulum, nec porttitor mauris sollicitudin.',
  'Aenean et tellus nec purus gravida placerat non non felis.',
  'Etiam pretium tortor vel dui tristique, quis malesuada tortor pulvinar.',
  'Duis tincidunt dolor non justo varius, ut ultrices massa euismod.',
  'Sed sit amet leo ullamcorper, tristique sem nec, consectetur dui.',
  'Ut tempor mauris in nunc rutrum, vel viverra quam laoreet.',
  'Nunc feugiat ipsum vel lacinia condimentum.',
  'Mauris ac nulla vitae magna efficitur tincidunt ut non purus.',
  'Integer nec erat in nisi vulputate varius.',
  'Mauris eleifend velit at sem malesuada, at rutrum dui tincidunt.',
  'Quisque auctor felis ac dolor efficitur placerat.',
  'Vivamus a ante quis dolor sollicitudin vulputate ac nec leo.',
  'Nunc a purus in purus volutpat feugiat eu quis nisi.',
  'Phasellus sit amet magna malesuada, dignissim tortor ac, malesuada odio.',
  'Phasellus nec nunc ullamcorper, luctus orci vitae, ullamcorper ligula.',
  'Aliquam quis neque quis elit interdum rhoncus.',
  'Proin molestie eros vitae lorem pharetra elementum.',
  'In non orci sagittis arcu mollis convallis vel tempor diam.',
  'Duis luctus enim eget arcu faucibus, vitae eleifend mi sodales.',
  'Aliquam tristique ligula vitae tortor pretium faucibus.',
  'Pellentesque lacinia nisi vel massa porttitor, vitae sodales ante luctus.',
  'Pellentesque tempus enim eget nulla ultricies mattis.',
  'Duis nec lorem ornare, convallis odio ac, placerat justo.',
  'Ut mattis velit sed rhoncus pellentesque.',
  'Quisque aliquet ipsum ut odio volutpat ornare.',
  'Cras pulvinar libero id libero semper, viverra vehicula est porta.',
  'Aliquam vehicula quam vitae est varius lobortis.',
  'Nam mattis quam ac scelerisque facilisis.',
  'Aliquam venenatis libero eu arcu iaculis facilisis.',
  'Aenean aliquet odio et lacus efficitur dapibus.',
  'Pellentesque sit amet metus iaculis, tempus dui ut, dictum metus.',
  'Fusce a est auctor, venenatis ex at, feugiat velit.',
  'Phasellus in leo eget quam feugiat convallis eu nec tortor.',
  'Phasellus tristique risus ut sapien luctus, ac eleifend ex dignissim.',
  'Morbi condimentum mauris hendrerit, tempor risus sit amet, mattis lorem.',
  'Donec in tellus quis ipsum auctor sodales nec sit amet est.',
  'Etiam aliquet mi id ipsum laoreet, eu tristique magna iaculis.',
  'Maecenas at metus ut est venenatis condimentum a ut risus.',
  'In consequat nibh et turpis posuere bibendum quis ut leo.',
  'Cras et sem ac diam aliquet tempor.',
  'Morbi at sem semper, mattis sapien at, viverra tellus.',
  'In fermentum mi ut feugiat lacinia.',
  'Ut pharetra urna ut enim aliquet, non faucibus eros porta.',
  'Nullam pretium purus at metus laoreet, non condimentum sem tincidunt.',
  'Pellentesque tincidunt nisl vel turpis scelerisque tincidunt.',
  'Donec malesuada quam et porttitor dignissim.',
  'Nullam eget lorem aliquet, tristique arcu vel, gravida lacus.',
  'Morbi maximus turpis non sapien semper, non interdum lorem mollis.',
  'Praesent convallis quam et risus pellentesque, eu pharetra libero lobortis.',
  'Ut a tellus at diam mollis maximus id a arcu.',
  'Phasellus id justo a ex congue pretium.',
  'Ut malesuada nisl vitae efficitur suscipit.',
  'Phasellus aliquet orci et erat aliquam volutpat.',
  'Mauris pellentesque orci a orci pharetra euismod.',
  'Mauris ultricies odio vel metus lacinia dignissim.',
  'Ut fermentum mi accumsan, volutpat justo nec, volutpat turpis.',
  'Morbi elementum lectus non iaculis posuere.',
  'Morbi sit amet orci dictum, consequat sapien ut, eleifend erat.',
  'Nam blandit elit quis lectus eleifend cursus.',
  'Morbi blandit arcu ut congue condimentum.',
  'Morbi quis lacus ultrices, vulputate eros in, pretium urna.',
  'Aenean aliquam lectus vel luctus rutrum.',
  'Etiam gravida neque non tellus lobortis, bibendum ullamcorper velit gravida.',
  'Cras pellentesque dui a dolor consequat, vitae gravida enim dictum.',
  'Nulla lacinia neque a rutrum rutrum.',
  'Pellentesque in massa facilisis, commodo mi nec, imperdiet augue.',
  'Vivamus vitae ex in dolor pulvinar condimentum eget sed metus.',
  'Maecenas efficitur elit vel elit vehicula fermentum.',
  'Pellentesque eu erat et eros varius pharetra eu eget nunc.',
  'Morbi eget urna quis augue pharetra pulvinar.',
  'Nam suscipit neque sed purus ornare, id posuere nunc iaculis.',
  'Nunc egestas tortor ut egestas gravida.',
  'Donec sodales odio vitae nisi varius, vel sodales augue tincidunt.',
  'Proin volutpat augue non elementum posuere.',
  'Nullam ultrices ex vel leo iaculis venenatis.',
  'Nunc scelerisque dolor ut tristique iaculis.',
  'Vivamus interdum est et odio tempus convallis.',
  'Sed feugiat nisl nec sapien viverra finibus.',
  'Vivamus congue magna quis elit venenatis malesuada.',
  'Quisque condimentum quam vitae erat laoreet gravida.',
  'Cras laoreet ligula in lacus aliquam suscipit.',
  'In facilisis ex vel ante elementum semper.',
  'Sed sit amet odio nec nisi faucibus pellentesque at ut odio.',
  'Nunc in nunc rhoncus, mollis tortor sit amet, fermentum est.',
  'Ut aliquet purus nec arcu sagittis, eget pharetra risus porta.',
  'Sed at dolor at eros aliquet fringilla.',
  'Ut blandit sem ac nunc pulvinar dictum.',
  'Nam sagittis odio eu nisi posuere, vitae consectetur leo pharetra.',
  'Donec eu felis ut quam commodo pellentesque.',
  'Mauris vitae lorem dapibus, dictum ligula blandit, imperdiet enim.',
  'Aenean ultrices leo sit amet auctor gravida.',
  'Vivamus ac magna et lectus ullamcorper convallis.',
  'Vestibulum ut odio gravida, vestibulum diam vitae, lacinia mi.',
  'Etiam vulputate nulla id dui rutrum congue.',
  'Aenean ac dui sit amet sem condimentum hendrerit.',
  'Nullam ut nisi ut leo mollis aliquam non eu arcu.',
  'Duis semper lectus sed quam tempus iaculis.',
  'Maecenas iaculis odio ut lacus blandit, vitae commodo dui laoreet.',
  'Sed lobortis ex sed arcu hendrerit elementum.',
  'Quisque euismod ligula ut nulla ornare, vel tempor ipsum auctor.',
  'Morbi pellentesque dui non justo interdum, ut gravida diam accumsan.',
  'Fusce viverra nulla et rhoncus pellentesque.',
  'Pellentesque quis nulla sed neque dictum dictum.',
  'Praesent sit amet enim laoreet, vulputate lectus in, blandit nulla.',
  'Maecenas consequat magna et orci sodales, eleifend pharetra ante vehicula.',
  'Nullam ullamcorper ipsum at nisi rutrum tincidunt.',
  'Suspendisse dignissim magna nec sapien vehicula consequat.',
  'Mauris venenatis nulla eget aliquam blandit.',
  'Nam ultricies neque vel risus interdum pharetra.',
  'Quisque placerat velit id accumsan auctor.',
  'Duis eu metus vel nibh sodales elementum.',
  'Sed quis velit at magna pulvinar egestas eu nec arcu.',
  'Maecenas ornare urna ac magna porttitor vehicula.',
  'Proin ac libero id nisi blandit posuere.',
  'Nam mattis leo ut porta tincidunt.',
  'Nulla convallis orci venenatis dui feugiat, a gravida sem cursus.',
  'Proin pretium diam sit amet vehicula condimentum.',
  'Ut ut risus id diam varius fringilla.',
  'Mauris id orci molestie, ornare nisi ut, aliquet justo.',
  'Suspendisse gravida purus vel dictum sodales.',
  'Duis sollicitudin libero quis dui semper euismod non sit amet eros.',
  'Duis viverra diam eu enim rhoncus, ut porttitor quam ornare.',
  'Sed tempor mauris eget rutrum maximus.',
  'Donec sit amet lectus eu quam sodales lobortis.',
  'Nunc dignissim nisl sed aliquam molestie.',
  'Duis a elit sodales, eleifend mi quis, fringilla massa.',
  'Nullam fringilla ipsum vel interdum hendrerit.',
  'Morbi sagittis lorem a efficitur maximus.',
  'Proin pretium nisi sed molestie facilisis.',
  'Etiam volutpat purus maximus velit scelerisque consequat.',
  'Quisque et arcu rutrum, consectetur lacus non, lacinia est.',
  'Nulla sed massa non lorem pharetra vulputate.',
  'Aliquam et lacus eu libero feugiat convallis et sit amet nunc.',
  'Donec lobortis metus ut vehicula efficitur.',
  'Aliquam elementum nunc vitae eros varius, id ornare libero laoreet.',
  'Suspendisse a quam nec dui efficitur pharetra nec a libero.',
  'Phasellus ac dui nec orci facilisis volutpat at vel ipsum.',
  'In suscipit metus ac ante interdum efficitur.',
  'Donec vitae quam quis mi laoreet rutrum id eget lorem.',
  'Proin vehicula turpis et nisi interdum egestas.',
  'Maecenas vel orci ac velit imperdiet efficitur.',
  'Nullam maximus erat eget ligula placerat, et egestas dui luctus.',
  'Mauris iaculis lacus id libero commodo, nec lacinia enim venenatis.',
  'Nulla tincidunt magna sit amet diam feugiat commodo.',
  'Proin ullamcorper ex quis massa porta, et luctus orci feugiat.',
  'Quisque quis orci non turpis rutrum semper.',
  'Vivamus sit amet turpis sit amet tellus auctor fringilla.',
  'Ut pulvinar nisl non diam laoreet, a vestibulum diam imperdiet.',
  'Proin tincidunt ante a turpis dapibus, et consectetur eros viverra.',
  'Donec blandit lorem in elit feugiat efficitur.',
  'Aenean volutpat massa ut aliquet condimentum.',
  'Mauris tempor neque et hendrerit lobortis.',
  'Vestibulum id nisi eget urna iaculis dignissim sed id est.',
  'Integer euismod nisl at velit suscipit suscipit.',
  'Donec aliquet mi at ligula finibus, accumsan hendrerit ex egestas.',
  'Praesent eget odio ac mi imperdiet pharetra.',
  'Sed nec nibh scelerisque, pellentesque justo et, dignissim lacus.',
  'Sed interdum nulla eget interdum placerat.',
  'Morbi interdum augue eu est convallis, sit amet fringilla velit pharetra.',
  'Sed sodales velit nec ante luctus lobortis.',
  'Proin a nunc pretium, tristique arcu vel, varius nunc.',
];

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    text: {
      whiteSpace: 'break-spaces',
    },
    refreshContainer: {
      display: 'flex',
    },
    refresh: {
      marginBottom: theme.spacing(3),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
);

export default function LoremIpsum() {
  const classes = useStyles();

  const [data, setData] = useState('');

  const generateLoremIpsum = () => {
    let str = loremIpsumStart + ' ';

    for (let i = 1; i < 100; i++) {
      str += loremIpsumData[randInt(0, loremIpsumData.length)];

      if (i % 8 === 0) {
        str += '\n\n';
      } else {
        str += ' ';
      }
    }

    setData(str);
  };

  useEffect(() => {
    generateLoremIpsum();
  }, []);

  return (
    <Page name="Lorem Ipsum Generator">
      <Container maxWidth="md">
        <div className={classes.refreshContainer}>
          <IconButton className={classes.refresh} onClick={generateLoremIpsum}>
            <Refresh fontSize="large" />
          </IconButton>
        </div>
        <Typography variant="body1" component="pre" className={classes.text}>
          {data}
        </Typography>
      </Container>
    </Page>
  );
}
