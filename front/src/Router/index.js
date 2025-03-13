import { Route, Routes, Navigate } from 'react-router';
import Test from '../pages/Test';
import TestNew from '../pages/TestNew';

const Router = () => {
    return (
        <>
            {/** 경로 설정 */}
            <Routes>
                <Route path="/" element={<Test />} />   {/** 루트(/) 경로를 라우터로 잡아줌 */}
                <Route path="/test/new" element={<TestNew />} />

                {/** 설정된 경로를 제외한 나머지 경로로 접속한 경우 루트 페이지로 이동 */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    );

}

export default Router;