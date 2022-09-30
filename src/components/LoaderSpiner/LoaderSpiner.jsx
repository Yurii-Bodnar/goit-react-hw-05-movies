import { ThreeDots } from 'react-loader-spinner';

const LoaderSpiner = () => {
  return (
    <ThreeDots
      height={100}
      width={100}
      radius="9"
      color="#ad0f83"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        minHheight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        minWidth: '100vh',
        marginTop: "50vh",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default LoaderSpiner;
