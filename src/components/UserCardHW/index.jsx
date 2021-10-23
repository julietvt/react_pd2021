import React, { Component } from 'react';

export default class UserCardHW extends Component {
constructor(props) {
  super(props)

  this.state = {
  };
};

  render() {


    const {imgSrc, name, tagline, tweet, following, fol} = this.props.user;
    return (<>
        <article className='card'>
            <div>
                <div>
                    <img className='userImg' src={imgSrc} alt={'user image'}/>
                </div>
                <div className='info'>
                    <div className='name'>
                        <div>{name}</div>
                        <div>{tagline}</div>
                    </div>
                    <button className='btn'>+</button>
                </div>
            </div>
            <div className='fol'>
                <div className='about'>
                    <div>Tweets</div>
                    <div>{tweet}</div>
                </div>
                <div className='about'>
                    <div>Following</div>
                    <div>{following}</div>
                </div>
                <div className='about'>
                    <div>Followers</div>
                    <div>{fol}</div>
                </div>
            </div>
        </article>
        </>
    )
  }
}
