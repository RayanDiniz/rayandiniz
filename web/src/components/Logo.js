import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link className="logo" to="./">
            <Badge variant="danger">Z</Badge>
            inid
        </Link>
    );
}