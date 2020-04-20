import * as actionTypes from '../actions/actiontypes';
import axios from 'axios';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import Cookies from 'js-cookie';

firebase.initializeApp({
  apiKey: "AIzaSyC6V_xGTaJQ55Zd_cRqZjrGcL95k2jb5EM",
  authDomain: "osbn-a36f9.firebaseapp.com",
  databaseURL: "https://osbn-a36f9.firebaseio.com",
  projectId: "osbn-a36f9",
  storageBucket: "osbn-a36f9.appspot.com",
  messagingSenderId: "878608303939",
  appId: "1:878608303939:web:e5ea8fa9d84d6874"
});

var storageRef = firebase.storage().ref();
var databaseRef = firebase.database().ref();

export const changeLanguage = (language, flag) => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language: language,
    flag: flag
  }
}

export const changeSection = (section) => {
  return {
    type: actionTypes.CHANGE_SECTION,
    section: section
  }
}

export const startLogin = () => {
  return {
    type: actionTypes.START_LOGIN
  }
}

export const loginSuccess = (token, id) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    idToken: token,
    localId: id
  }
}

export const loginFail = () => {
  return {
    type: actionTypes.LOGIN_FAIL
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}

export const initLogout = () => {
  return dispatch => {
    dispatch(logout());
    Cookies.remove('acess_token', { path: '/login' });
    console.log(Cookies.get())
    console.log('dentro')
  }
}

export const initLogin = (email, password) => {
  return dispatch => {
    dispatch(startLogin());
    const authData = {
      email: email,
      password: password
    }
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC6V_xGTaJQ55Zd_cRqZjrGcL95k2jb5EM', authData)
      .then(response => {
        console.log(response.data);
        dispatch(loginSuccess(response.data.idToken, response.data.localId));
        Cookies.set('acess_token', response.data.idToken, { expires: 1, path: '/login' });
      })
      .catch(error => {
        console.log(error);
        dispatch(loginFail(error));
      })
  }
}

export const initPosting = () => {
  return {
    type: actionTypes.START_POSTING
  }
}

export const postingSuccess = () => {
  return {
    type: actionTypes.POST_SUCCESS
  }
}

export const postingFail = (error) => {
  return {
    type: actionTypes.POST_FAIL,
    error: error
  }
}

export const changePost = () => {
  return {
    type: actionTypes.CHANGE_POST
  }
}

export const changePostSuccess = () => {
  return {
    type: actionTypes.CHANGE_POST_SUCCESS
  }
}

export const changePostFail = () => {
  return {
    type: actionTypes.CHANGE_POST_FAIL
  }
}

export const removePost = () => {
  return {
    type: actionTypes.REMOVE_POST
  }
}

export const removePostSuccess = () => {
  return {
    type: actionTypes.REMOVE_POST_SUCCESS
  }
}

export const removePostFail = () => {
  return {
    type: actionTypes.REMOVE_POST_FAIL
  }
}

export const addImage = () => {
  return {
    type: actionTypes.ADD_IMAGE
  }
}

export const addImageSuccess = () => {
  return {
    type: actionTypes.ADD_IMAGE_SUCCESS
  }
}

export const addImageFail = () => {
  return {
    type: actionTypes.ADD_IMAGE_FAIL
  }
}

export const startAddImage = (image, imagePost, token) => {
  return dispatch => {
    dispatch(addImage());

    let metadata = {
      contentType: 'image/jpg'
    }

    storageRef.child('galeria/' + image.name).put(image, metadata)
      .then(link => {
        link.ref.getDownloadURL()
          .then(url => {
            imagePost.imagem = url;
            imagePost.nome = image.name

            axios.get('https://osbn-a36f9.firebaseio.com/galeria.json')
              .then(response => {
                let position = response.data.length;

                axios.put('https://osbn-a36f9.firebaseio.com/galeria/' + position + '.json?auth=' + token, imagePost)
                  .then(response => {
                    dispatch(addImageSuccess());
                  })
                  .catch(error => {
                    console.log(token)
                    dispatch(addImageFail());
                  })
              })
          })
      })
  }
}



export const removeImage = () => {
  return {
    type: actionTypes.REMOVE_IMAGE
  }
}

export const removeImageSuccess = () => {
  return {
    type: actionTypes.REMOVE_IMAGE_SUCCESS
  }
}

export const removeImageFail = () => {
  return {
    type: actionTypes.REMOVE_IMAGE_FAIL
  }
}

export const startRemoveImage = (position) => {
  return dispatch => {
    dispatch(removeImage())

    axios.get('https://osbn-a36f9.firebaseio.com/galeria/' + position + '.json')
      .then(response => {

        var image = response.data;

        let imageRef = storageRef.child('galeria/' + image.nome);
        imageRef.delete()
          .then(response => {
            console.log(response);

            let galleryPost = databaseRef.child('galeria/' + position);
            galleryPost.remove()
              .then(response => {
                dispatch(removeImageSuccess())
                console.log(response);
              })
              .catch(error => {
                dispatch(removeImageFail())
                console.log(error);
              })
          })
      })
  }
}

export const startRemovePost = (position, language) => {
  return dispatch => {
    dispatch(removePost());

    var postRef = databaseRef.child('noticias/' + language + '/' + position);
    postRef.remove()
      .then(response => {
        dispatch(removePostSuccess());
        console.log('resposta: ' + response);
      })
      .catch(error => {
        dispatch(removePostFail());
        console.log('error: ' + error);
      })
  }
}

export const initChangePost = (newPost, position, language, image) => {
  return dispatch => {
    dispatch(changePost());
    // newPost.imagem = 'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545';

    var metadata = {
      contentType: 'image/jpeg'
    };

    if (image === null) {
      axios.put('https://osbn-a36f9.firebaseio.com/noticias/' + language + '/' + position + '.json', newPost)
        .then(response => {
          dispatch(changePostSuccess());
        })
        .catch(error => {
          dispatch(changePostFail());
        })

    } else {

      storageRef.child('imagens/noticias/' + image.name).put(image, metadata)
        .then(link => {
          link.ref.getDownloadURL()
            .then(url => {
              newPost.imagem = url;

              axios.put('https://osbn-a36f9.firebaseio.com/noticias/' + language + '/' + position + '.json', newPost)
                .then(response => {
                  dispatch(changePostSuccess());
                  console.log(response.data);
                })
                .catch(error => {
                  dispatch(changePostFail());
                })

            })

        })

    }

  }
}

export const singlePost = (brPost, image) => {
  return dispatch => {
    dispatch(initPosting());

    var metadata = {
      contentType: 'image/jpg'
    };

    storageRef.child('imagens/noticias/' + image.name).put(image, metadata)
      .then(link => {
        link.ref.getDownloadURL()
          .then(url => {
            // console.log('link: ' + url);

            axios.get('https://osbn-a36f9.firebaseio.com/noticias/portuguese.json')
              .then(response => {
                let position = response.data.length;
                brPost.imagem = url;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/portuguese/' + position + '.json', brPost)
                  .then(response => {
                    dispatch(postingSuccess());
                  })
                  .catch(error => {
                    dispatch(postingFail(error));
                    console.log(error);
                  })
              })
          })
      })


  }
}

export const startPosting = (brPost, enPost, frPost, image) => {
  return dispatch => {
    dispatch(initPosting());


    var metadata = {
      contentType: 'image/jpeg'
    };

    storageRef.child('imagens/noticias/' + image.name).put(image, metadata)
      .then(link => {
        link.ref.getDownloadURL()
          .then(url => {
            // console.log('link: ' + url);

            axios.get('https://osbn-a36f9.firebaseio.com/noticias/portuguese.json')
              .then(response => {
                let position = response.data.length;
                brPost.imagem = url;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/portuguese/' + position + '.json', brPost)
                  .catch(error => {
                    dispatch(postingFail(error));
                    console.log(error);
                  })
              })

            axios.get('https://osbn-a36f9.firebaseio.com/noticias/english.json')
              .then(response => {
                let position = response.data.length;
                enPost.imagem = url;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/english/' + position + '.json', enPost)
                  .catch(error => {
                    dispatch(postingFail(error));
                    console.log(error);
                  })
              })

            axios.get('https://osbn-a36f9.firebaseio.com/noticias/french.json')
              .then(response => {
                let position = response.data.length;
                frPost.imagem = url;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/french/' + position + '.json', frPost)
                  .then(response => {
                    dispatch(postingSuccess());
                  })
                  .catch(error => {
                    dispatch(postingFail(error));
                    console.log(error);
                  })
              })
          })
      })
  }
}