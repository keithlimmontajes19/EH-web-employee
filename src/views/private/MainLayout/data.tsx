import {
  BellOutlined,
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';

export const NAVIGATION = [
  {
    key: 1,
    title: 'Home',
    icon: (colorCondition) => (
      <HomeOutlined
        style={{
          fontSize: 20,
          marginTop: 5,
          color: colorCondition('1'),
        }}
      />
    ),
  },
];

// <Menu.Item
// key="1"
// style={{marginTop: 48}}
// onClick={() => pushHistory('/home')}
// icon={
//   <HomeOutlined
//     style={{
//       fontSize: 20,
//       marginTop: 5,
//       color: colorCondition('1'),
//     }}
//   />
// }>
// <span
//   style={{
//     marginTop: 20,
//     fontSize: 16,
//     fontWeight: 700,
//     color: colorCondition('1'),
//   }}>
//   Home
// </span>
// </Menu.Item>
