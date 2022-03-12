import './App.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userListAction } from './actions/homeAction'
function Home(props) {
    useEffect(() => {
        props?.userListAction();
    }, [])
    console.log(props?.list);
    return (
        <div className="App">
            <ul>
                {props?.list?.data?.map((user, index) => (<li key={"u_" + index}>{user.login}</li>))}
            </ul>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        list: state?.home,
    };
};
export default connect(mapStateToProps, { userListAction })(Home);