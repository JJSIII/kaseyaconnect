using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.Common;
using System.IO;
using System.Runtime.Serialization;
using System.Web.Script.Serialization;
using System.Text;
using System.Net;

namespace rest_test_twitter.social
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            getRest();
        }
        protected void showError(string errMsg)
        {
            errMsg = errMsg.Replace("'", "");
            errMsg = errMsg.Replace(",", "");
            string msg = String.Concat("<script>", String.Concat("alert('", errMsg, "');"), "</script>");
            Page.ClientScript.RegisterStartupScript(this.GetType(), "", msg);
        }
        protected string getData(string apiurl)
        {
            string responseFromServer = "";
            string responseString = "";
            string[] testarray1 = new string[10];
            string[] testarray2 = new string[10];
            try
            {
                //string apiurl = " http://search.twitter.com/search.json?q=%23kaseyauc";

                HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(apiurl);
                request.Method = "GET";
                request.ContentType = "application/json";
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                string status = response.StatusCode.ToString();
                if (status == "OK")
                {
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    responseString = reader.ReadToEnd();
                    reader.Close();
                }
                response.Close();

            }
            catch (WebException e)
            {
                using (WebResponse response = e.Response)
                {
                    HttpWebResponse httpResponse = (HttpWebResponse)response;
                    responseFromServer = Convert.ToString(httpResponse.StatusCode) + " - ";
                    using (Stream httpStream = response.GetResponseStream())
                    {
                        responseFromServer += new StreamReader(httpStream).ReadToEnd();
                        // Display the content.
                        showError(responseFromServer);
                    }
                }
            }

            return responseString;
            //return responseFromServer;

        }
        protected void getRest()
        {
            string apiurl = " http://search.twitter.com/search.json?q=%23kaseyauc%2BOR%2B%40kaseyacorp%2BOR%2Bkaseya";
            string json = getData(apiurl);
            StringBuilder sbembed = new StringBuilder();
            string FilePath = HttpContext.Current.Server.MapPath("\\files") + "\\";
            string TwitterIDFile = FilePath + "ids" + ".txt";
            string TwitterHTMLFile = FilePath;
            Boolean FoundID = false;
            string line = "";
            string twitterid = "";
            string embedhtml = "";
            int x = 0;
            if (!String.IsNullOrEmpty(json))
            {
                var jss = new JavaScriptSerializer();
                dynamic data = jss.Deserialize<dynamic>(json);
                x = 0;
                foreach (Dictionary<string, object> item in data["results"])
                {
                    x++;
                    twitterid = item["id"].ToString();
                    //check here if we already have twitter id
                    try
                    {
                        System.IO.StreamReader sr = new System.IO.StreamReader(TwitterIDFile);
                        line = "";
                        FoundID = false;
                        while ((line = sr.ReadLine()) != null)
                        {
                            if (String.IsNullOrEmpty(line))
                            {
                                continue;
                            }
                            if (line == twitterid)
                            {
                                FoundID = true;
                                break;
                            }
                        }
                        sr.Close();
                    }
                    catch (Exception exfile)
                    {
                    }
                    if (FoundID)
                    {
                        continue;
                    }
                    if (x == 0)
                    {
                        apiurl = "https://api.twitter.com/1/statuses/oembed.json?id=" + twitterid + "&hide_thread=true";
                    }
                    else
                    {
                        apiurl = "https://api.twitter.com/1/statuses/oembed.json?id=" + twitterid + "&hide_thread=true" + "&omit_script=true";
                    }
                    string json2 = getData(apiurl);
                    if (String.IsNullOrEmpty(json2))
                    {
                        break;
                    }
                    dynamic data2 = jss.Deserialize<dynamic>(json2);
                    embedhtml = data2["html"].ToString();
                    TwitterHTMLFile = FilePath + twitterid + ".txt";
                    try
                    {
                        StreamWriter sw = new StreamWriter(TwitterHTMLFile, true, System.Text.Encoding.UTF8);
                        sw.WriteLine(embedhtml);
                        sw.Flush();
                        sw.Close();
                    }
                    catch (Exception exfile)
                    {
                    }
                    try
                    {
                        StreamWriter sw2 = new StreamWriter(TwitterIDFile, true, System.Text.Encoding.UTF8);
                        sw2.WriteLine(twitterid);
                        sw2.Flush();
                        sw2.Close();
                    }
                    catch (Exception exfile)
                    {
                    }
                }
            }
            System.IO.StreamReader sr2 = new System.IO.StreamReader(TwitterIDFile);
            line = "";
            SortedDictionary<long, string> TwitterRecord = new SortedDictionary<long, string>();
            x = 0;
            while ((line = sr2.ReadLine()) != null)
            {
                if (String.IsNullOrEmpty(line))
                {
                    continue;
                }
                if (line.Contains("kaseya_bot"))
                {
                    continue;
                }
                if (line.Contains("@MAESTRO_KASEYA"))
                {
                    continue;
                }
                x++;
                twitterid = line;
                TwitterHTMLFile = FilePath + twitterid + ".txt";
                System.IO.StreamReader sr3 = new System.IO.StreamReader(TwitterHTMLFile);
                embedhtml = "";
                while ((embedhtml = sr3.ReadLine()) != null)
                {
                    if (String.IsNullOrEmpty(embedhtml))
                    {
                        continue;
                    }
                    if (embedhtml.Contains("kaseya_bot"))
                    {
                        continue;
                    }
                    if (embedhtml.Contains("MAESTRO_KASEYA"))
                    {
                        continue;
                    }
                    try
                    {
                        TwitterRecord.Add(Int64.Parse(twitterid), embedhtml);
                    }
                    catch (Exception exadd)
                    {
                    }
                    break;
                }
                sr3.Close();
            }
            sr2.Close();
            int numtwit = TwitterRecord.Count();
            string[] htmlarray = new string[numtwit];
            x = 0;
            foreach (var item in TwitterRecord)
            {
                htmlarray[x] = item.Value;
                x++;
            }
            Array.Reverse(htmlarray);
            int EmbedLimit = 20 - 1;
            for (int i = 0; i < numtwit; i++)
            {
                sbembed.Append("<div class=\"shell\">");
                sbembed.Append(htmlarray[i]);
                sbembed.Append("</div>");
                if (i > EmbedLimit)
                {
                    break;
                }
            }
            Literal1.Text = sbembed.ToString();
        }
    }
}