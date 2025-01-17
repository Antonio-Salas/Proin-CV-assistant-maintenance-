import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { templateList } from '../data/templates';
import { UserContext } from '../main';
import * as React from 'react';
import DropButton from './DropButton';
import AlertDelete from './AlertDelete';
import { ButtonGroup } from '@mui/material';


export function Home() {
    const user = useContext(UserContext);
    const { userImg, name, description } = user;
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="mw9 mt4 pa3 center flex justify-between items-center btn-movil">
                <div className="user flex flex-wrap w-80">
                    {userImg && (
                        <div className="user__img">
                            <img
                                className="user__img__picture"
                                src={userImg}
                                alt={`${name}-picture`}
                            />
                        </div>
                    )}
                    <div className="pl4 flex flex-column justify-center w-80">
                        <span className="db fw6 f-user">{`Bienvenido ${user.name}`}</span>
                        <p className="mb0">
                            <span className="fw6">Descripción: </span>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="w-20">
                    <ButtonGroup>
                    <AlertDelete/>
                    <DropButton/>
                    </ButtonGroup>
                                    
                </div>
            </div>
            <div className="mw9 pv4 pa3 center">
                <h4 className="fw5 ">Diseños disponibles</h4>
                <section className="designs">
                    {templateList.map((templateName) => {
                        return (
                            <article key={templateName} className="centerDesigns">
                                <a
                                    className="designs__item dim"
                                    href={`/preview?design=${templateName}`}
                                >
                                    <img
                                        className="designs__item__img"
                                        src={`/assets/templates/${templateName}.png`}
                                        alt={templateName}
                                    />
                                </a>
                            </article>
                        );
                    })}
                </section>
            </div>
        </Fragment>
    );
}
