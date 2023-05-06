import React from 'react';


const Pagination = () => {
    return (
        <div div="row">
            <ul class="pagination pagination-lg justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;