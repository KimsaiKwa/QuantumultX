#!/bin/sh
cd /tmp
echo "*********************************************************"
echo "*                    SS插件安装器                         *"
echo "*                                                       *"
echo "*          安装前请关闭小米路由器自带VPN功能                  *"
echo "*                                                       *"
echo "*         支持路由型号：mini | r1d | r2d | r3              *"
echo "*                                                       *"
echo "*     没SS帐号？这里：http://bbs.xiaomi.cn/t-13066771      *"
echo "*                                                       *"
echo "*********************************************************"
echo "                                                         "
echo "请选择需要的操作（按下对应数字后回车确认）"
echo "1：安装r1d&r2d版SS插件"
echo "2：卸载r1d&r2d版SS插件"
echo "3：安装mini版ss插件"
echo "4：卸载mini版ss插件"
echo "5：安装r3版ss插件"
echo "6：卸载r3版ss插件"
echo "0:退出"
read num

if [ "${num}" == "1" ]
then
cd /tmp
rm -rf *.sh
wget http://7xo6sw.com1.z0.glb.clouddn.com/r2d_ss.sh
chmod -R 777 r2d_ss.sh
./r2d_ss.sh
fi
if [ "${num}" == "2" ]
then
cd /tmp
rm -rf *.sh
wget hhttp://7xo6sw.com1.z0.glb.clouddn.com/r2d_uninstall.sh
chmod -R 777 r2d_uninstall.sh
./r2d_uninstall.sh
fi


if [ "${num}" == "3" ]
then
cd /tmp
rm -rf *.sh
wget http://7xo6sw.com1.z0.glb.clouddn.com/mini_ss.sh
chmod -R 777 mini_ss.sh
./mini_ss.sh
fi

if [ "${num}" == "4" ]
then
cd /tmp
rm -rf *.sh
wget http://7xo6sw.com1.z0.glb.clouddn.com/mini_uninstall.sh
chmod -R 777 mini_uninstall.sh
sh mini_uninstall.sh
fi

if [ "${num}" == "5" ]
then
cd /tmp
rm -rf *.sh
wget http://7xo6sw.com1.z0.glb.clouddn.com/r3_ss.sh
chmod -R 777 r3_ss.sh
./r3_ss.sh
fi

if [ "${num}" == "6" ]
then
cd /tmp
rm -rf *.sh
wget http://7xo6sw.com1.z0.glb.clouddn.com/r3_uninstall.sh
chmod -R 777 r3_uninstall.sh
sh r3_uninstall.sh
fi

if [ "${num}" == "0" ]
then
exit
fi