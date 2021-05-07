import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
// import {API_URL} from "@env";

// redux
import {connect} from 'react-redux';
import {login} from '../redux/action/authAction';

const LoginScreen = ({navigation, login}) => {
  const API_URL = 'http://192.168.1.16:8007';
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [level, setLevel] = useState(1);
  const [show, setShow] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  const token = useSelector(state => state.authReducer.token);

  const empty = () => {
    if (email === '' || pass === '') {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    const emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;

    const data = {
      email: email,
      password: pass,
      level_id: level,
    };

    if (!empty()) {
      if (email === '' || pass === '') {
        setErrMsg('please fill email or password first');
      } else if (!email.match(emailFormat)) {
        setErrMsg('Invalid email');
      } else if (!checkPass.test(pass)) {
        setErrMsg(
          'Password must contain at least 1 number, and be longer than 8 character',
        );
      } else {
        axios
          .post(API_URL + '/auth/login', data)
          .then(res => {
            const token = res.data.data.token;
            const user_id = res.data.data.user_id;
            const fullname = res.data.data.full_name;
            login(token, user_id, fullname, email, level);
            navigation.navigate('Scan')
            console.log('ini email', email);
          })
          .catch((err) => {
            console.log(err);
            // if (err.response.data.message.msg === 'User Not Found') {
            //   setErrMsg('Email/Password Salah');
            // }
            // if (err.response.data.message.msg === 'Wrong Password') {
            //   setErrMsg('Email/Password Salah');
            // }
          });
      }
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.name}>Codemi</Text>
        <View style={styles.content}>
          <View style={styles.subContent}>
            <Text style={styles.header}>Login</Text>
            <Text style={styles.subHeader}>
              Login to your existing account to access
            </Text>
          </View>
          <View style={styles.form}>
            <Input
              placeholder="Enter your e-mail"
              keyboardAppearance="dark"
              onChangeText={text => setEmail(text)}
            />
            <Input
              placeholder="Enter your password"
              onChangeText={text => {
                setPass(text);
              }}
              secureTextEntry={show}
            />
          </View>

          <TouchableOpacity
            style={empty() ? styles.btn : styles.btnActive}
            onPress={handleSubmit}>
            <Text style={empty() ? styles.textNon : styles.textActive}>
              Login
            </Text>
          </TouchableOpacity>
          <Text>{errMsg}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    // marginBottom: 50,
    color: '#00ff00',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 30,
    padding: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0.5,
    borderColor: '#EEEEEE',
    elevation: 1,
    marginTop: 125,
  },
  subContent: {
    marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 30
  },
  subHeader: {
    fontSize: 16,
    color: '#878787',
  },
  form: {
    marginTop: 70,
  },
  forgot: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    top: -8,
  },
  btn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  btnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  textNon: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  acc: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#5D5757',
  },
  login: {
    color: '#6379F4',
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    login: (token, user_id, fullname, email, level) =>
      dispatch(login(token, user_id, fullname, email, level)),
  };
};
export default connect(null, mapDispatchToProps)(LoginScreen);
// export default LoginScreen;
